'use strict';

module.exports = function(grunt) {
  var path = require('path');
  var fs = require('fs');
  var swaggerJSDoc = require('swagger-jsdoc');

  var swaggerDefinitionFiles = path.normalize(__dirname + '/../doc/REST_API/swagger/definitions/*.js');
  var swaggerParameterFiles = path.normalize(__dirname + '/../doc/REST_API/swagger/parameters/*.js');
  var swaggerResponseFiles = path.normalize(__dirname + '/../doc/REST_API/swagger/responses/*.js');
  var swaggerRoutesFiles = path.normalize(__dirname + '/../backend/webserver/api_james/*.js');
  var swaggerOutputFile = path.normalize(__dirname + '/../doc/REST_API/swagger/swagger_for_james.json');

  var options = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: 'James',
      description: 'James APIs',
      version: '0.1'
    },
    host: 'localhost:8000',
    basePath: '/',
    consumes: ['application/json'],
    produces: ['application/json']
  },
  apis: [swaggerDefinitionFiles, swaggerParameterFiles, swaggerResponseFiles, swaggerRoutesFiles]
};

  grunt.registerTask('swagger-james-generate', function() {

    var swaggerSpec = swaggerJSDoc(options);

    swaggerSpec.securityDefinitions = {
      openpaas_auth: {
        type: 'oauth2',
        description: 'OAuth2 security scheme for the OpenPaaS API',
        flow: 'password',
        tokenUrl: 'localhost:8080/oauth/token'
      }
    };

    try {
      fs.writeFileSync(swaggerOutputFile, JSON.stringify(swaggerSpec));
      grunt.log.ok('API Specification file ' + swaggerOutputFile + ' generated.');
    } catch (error) {
      grunt.log.error('Could not generate API Specification file (' + error + ').');
    }
  });
};
