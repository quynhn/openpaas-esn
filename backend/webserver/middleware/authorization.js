'use strict';

const passport = require('passport');
const config = require('../../core').config('default');
const userModule = require('../../core/user');
const domainModule = require('../../core/domain');

module.exports = {
  loginAndContinue,
  requiresLogin,
  requiresAPILogin: _requiresAPILoginAndFailWithError(),
  requiresAPILoginAndFailWithError: _requiresAPILoginAndFailWithError(true),
  requiresDomainManager,
  requiresDomainMember,
  requiresCommunityCreator,
  requiresJWT,
  decodeJWTandLoadUser
};

function loginAndContinue(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login?continue=' + encodeURIComponent(req.originalUrl));
}

function requiresLogin(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

function _requiresAPILoginAndFailWithError(failWithError = false) {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }

    if (config.auth && config.auth.apiStrategies) {
      return passport.authenticate(config.auth.apiStrategies, { session: false, failWithError: failWithError })(req, res, next);
    }

    res.set('Content-Type', 'application/json; charset=utf-8');
    res.status(401).json({
      error: {
        code: 401,
        message: 'Login error',
        details: 'Please log in first'
      }
    });
  };
}

/**
 * Checks that the current request user is the current request domain manager
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
function requiresDomainManager(req, res, next) {
  if (!req.user || !req.domain || !req.user._id) {
    return res.status(400).json({error: 400, message: 'Bad request', details: 'Missing user or domain'});
  }

  domainModule.userIsDomainAdministrator(req.user, req.domain, (err, isDomainAdministrator) => {
    if (err) {
      return res.status(500).json({
        error: {
          status: 500, message: 'Server Error', details: err.message
        }
      });
    }

    if (isDomainAdministrator) {
      return next();
    }

    res.status(403).json({error: 403, message: 'Forbidden', details: 'User is not the domain manager'});
  });
}

function requiresDomainMember(req, res, next) {
  if (!req.user || !req.domain) {
    return res.status(400).json({error: 400, message: 'Bad request', details: 'Missing user or domain'});
  }

  domainModule.userIsDomainMember(req.user, req.domain, (err, isDomainMember) => {
    if (err) {
      return res.status(500).json({
        error: {
          status: 500, message: 'Server Error', details: err.message
        }
      });
    }

    if (isDomainMember) {
      return next();
    }

    res.status(403).json({error: 403, message: 'Forbidden', details: 'User does not belongs to the domain'});
  });
}

function requiresCommunityCreator(req, res, next) {
  if (!req.community) {
    return res.status(400).json({error: 400, message: 'Bad request', details: 'Missing community'});
  }

  if (!req.user) {
    return res.status(400).json({error: 400, message: 'Bad request', details: 'Missing user'});
  }

  if (!req.community.creator.equals(req.user._id)) {
    return res.status(403).json({error: 403, message: 'Forbidden', details: 'User is not the community creator'});
  }

  next();
}

function requiresJWT(req, res, next) {
  passport.authenticate('jwt', {session: false})(req, res, next);
}

function decodeJWTandLoadUser(req, res, next) {
  const payload = req.user;

  if (!payload.email) {
    return res.status(400).json({error: {code: 400, message: 'Bad request', details: 'Email is required'}});
  }

  userModule.findByEmail(payload.email, (err, user) => {
    if (err) {
      return res.status(500).json({error: {code: 500, message: 'Internal Server Error', details: 'Error while searching for the user'}});
    }
    if (!user) {
      return res.status(404).json({error: {code: 404, message: 'Not Found', details: 'Email is not valid.'}});
    }

    req.user = user;
    next();
  });
}
