(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      // home module
      'app.services.home',
      'app.directives.home',
      'app.routes.home', 
      // login module
      'app.services.login',
      'app.directives.login',
      'app.routes.login',
      // rent module
      'app.services.rent',
      'app.directives.rent',
      'app.routes.rent',
        // details rent module
        'app.directives.sale-details',
        'app.routes.sale-details',
      // sale module
      'app.services.sale',
      'app.directives.sale',
      'app.routes.sale',
        // details sale module
        'app.directives.rent-details',
        'app.routes.rent-details',
      // search filters module
      'filters',
      'selectFilters',
      
      'getting-started',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .constant("API", {
      "URL":"https://sdw-immo-backend.herokuapp.com/",
    })
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
