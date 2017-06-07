(function (angular) {
  'use struct';

  // Constructeur du controller
  function ctrl(scope,translate){
    scope.today = new Date();

    scope.language = translate.use();

    scope.changeLanguage = function(language){
      translate.use(language);
      scope.language = language;
    }
  }

  // Injection des dépendances pour ce controller
  ctrl.$inject = ["$scope","$translate"];

  // Récupération du module "app" et ajout du controller
  angular.module('app').controller('headerController',ctrl);

  })(window.angular);
