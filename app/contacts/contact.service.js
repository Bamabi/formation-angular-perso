(function (angular) {
  'use struct';

  var contactService = function($http){
    var self = this;
    /*self.contacts = [{
        "id": "5773935c7d20c31d3d2f60cd",
        "name": "Santiago Ramos",
        "email": "santiagoramos@insuron.com",
        "phone": "+1 (945) 463-3289"
      },{"id": "5773935c5fdca5275138bad9",
        "name": "Corinne Michael",
        "email": "corinnemichael@insuron.com",
        "phone": "+1 (963) 453-2865"
      },{"id": "5773935cad33b7b8a284bf33",
        "name": "Dennis Madden",
        "email": "dennismadden@insuron.com",
        "phone": "+1 (885) 439-2127"
      },{"id": "5773935cf55a82406749d70c",
        "name": "Miller Dunlap",
        "email": "millerdunlap@insuron.com",
        "phone": "+1 (871) 560-2395"
      },{"id": "5773935c7c8a97c5fe9ee265",
        "name": "Cross Acosta",
        "email": "crossacosta@insuron.com",
        "phone": "+1 (880) 456-3584"
      },{"id": "5773935cf2ca96242cb17056",
        "name": "Wade Duke",
        "email": "wadeduke@insuron.com",
        "phone": "+1 (888) 523-2749"
      }];*/
    self.print = function(){
      return self.contacts;
    }

    self.query = function(){
      return $http({
        method: 'GET',
        url: 'http://www.mocky.io/v2/576bae931100003d0666670a'
      })
    }
  }
  contactService.$inject=['$http'];

  contactModule = angular.module('contactModule');

  contactModule.service('contactService', contactService);

})(window.angular);
