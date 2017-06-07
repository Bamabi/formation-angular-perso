(function (angular) {
  'use struct';

  var contactList = function(){
    return {
      restrict : 'AE',
      templateUrl : 'app/contacts/contact.list.html'
    }
  }
  contactModule = angular.module('contactModule');

  contactModule.directive('contactList', contactList);

})(window.angular);
