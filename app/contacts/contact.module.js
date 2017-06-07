(function (angular) {
  'use struct';

  // imports
  var imports = [];

  function config(stateProvider){
    stateProvider.state('root.contacts', {
      url: '/contacts',
      views: {
        'main@': {
          templateUrl: 'app/contacts/contact.list.html',
          controller: 'contactController'
        }
      }
    });
    stateProvider.state('root.contacts.add', {
      url: '/add',
      views: {
        'main@': {
          templateUrl: 'app/contacts/contact.add.html',
          controller: 'contactController'
        }
      }
    });

  }

  config.$inject=['$stateProvider'];

  var contactModule = angular.module('contactModule',[]).config(config);

})(window.angular);
