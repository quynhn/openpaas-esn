'use strict';

angular.module('esn.markdown-parser', ['btford.markdown', 'ngSanitize'])
  .config(function(markdownConverterProvider) {
    markdownConverterProvider.config({
      extensions: ['table']
    });
  })
  .run(function(parserResolver, $q, markdownConverter, $sanitize) {
    parserResolver.register('markdown', function(text) {
      var defer = $q.defer();
      defer.resolve($sanitize(markdownConverter.makeHtml(text)));
      return defer.promise;
    });
  });
