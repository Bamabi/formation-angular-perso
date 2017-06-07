(function (angular) {
  'use struct';

var dataStore = function(){
  this.type = 'localStorage';

  this.$get = function(){
    var type = this.type;
    return {
      set: function(key,data){
        window[type].setItem(key,JSON.stringify(data));
      },
      get: function(key){
        return JSON.parse(window[type].getItem(key)) || [];
      }
    }
  }

  this.setType = function(type){
    this.type = type;
  }
};

// module configuration
angular.module('app').provider('dataStore',dataStore)

})(window.angular);
