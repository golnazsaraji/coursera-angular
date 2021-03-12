(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

//LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.lunch_menu = "";
  $scope.message = "";

  function CountLunchItem(string){
    if(string == "" || string = " "){
      $scope.message = "Please enter data first";
      return;
    }

    else {
      var j = 0
      var items = string.split(',');

      for (var i = 0; i < items.length; i++) {
        if(items[i] != string.empty && items[i] != "")
        j++;
      }

      if(j <= 3)
        $scope.message = "Enjoy!";
      else $scope.message = "Too much!" ;
  }
}

})();
