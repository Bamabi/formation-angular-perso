(function (angular) {
  'use struct';

  var imports = [
    'ngMessages',
    'ngCookies',
    'ui.router',
    'contactModule',
    'pascalprecht.translate',
  ];

  function config(dataStoreProvider,stateProvider,urlRouterProvider,translateProvider){
    // State configuration
    stateProvider.state('root', {
      views: {
        'header': {
          templateUrl: 'app/common/header/header.html',
          controller: 'headerController'
        },
        'footer': {
          templateUrl: 'app/common/footer/footer.html'
          //template: '<monFooter></monFooter>'
          //controller: 'headerController'
        }
      }
    });

    urlRouterProvider.otherwise('/contacts');

    translateProvider.useStaticFilesLoader({
      prefix: 'app/common/i18n/',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['en','fr','es'], {
      'en_*': 'en',
      'fr*': 'fr',
      'es*': 'es'
    });
    translateProvider.useCookieStorage();
    // Default language
    translateProvider.determinePreferredLanguage();




    //dataStoreProvider.setType('sessionStorage');
  };
  config.$inject=['dataStoreProvider',
                  '$stateProvider',
                  '$urlRouterProvider',
                  '$translateProvider'];

  //main module
  angular.module('app', imports).config(config);


})(window.angular);
