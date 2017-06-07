(function (angular) {
  'use struct';

  var contactController = function(scope,contactService,dataStore,$state){
    scope.contacts = dataStore.get('contacts');
    scope.contact = {};

    //scope.name = 'Alban';
    //scope.contacts = contactService.print();
    /*contactService.query().then(function(response){
      scope.contacts = response.data;
    });*/

    scope.addContact = function(){
      var contact = scope.contact;
      contact.id = new Date().getTime();

      scope.contacts.push(contact);
      dataStore.set('contacts',scope.contacts);
      scope.contact = {};
      $state.go('root.contacts');
    };

    scope.cancelAdd = function(){
      $state.go('root.contacts');
    }

    scope.deleteContact = function(contact){
      for(var i = scope.contacts.length - 1; i >= 0; i--) {
          if(scope.contacts[i].id === contact.id) {
             scope.contacts.splice(i, 1);
          }
      }
    };
  };
  contactController.$inject=['$scope','contactService','dataStore','$state'];

  contactModule = angular.module('contactModule');

  contactModule.controller('contactController',contactController);

  })(window.angular);
