'use strict';

let app = angular.module('myApp', ['ngStorage']);


app.controller('mainCtrl', function($scope, $interval,$localStorage, $sessionStorage) {

  $scope.total = 0;
  $scope.propertyName=null;
  $scope.reverse = true;
  // $scope.$storage = $localStorage;

  $scope.sortBy = (propertyName) => {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  }

  $scope.trans = [{description:'buy car', date:'2018-05-31T07:00:00.000Z', amount: -5000, type:'debit'}];

  $scope.addTrans = () => {

    if($scope.newTrans.type === 'debit') {
      $scope.newTrans.type = -$scope.newTrans.type;
    }    
    $scope.trans.push($scope.newTrans);
    $scope.newTrans = '';


  };

  $scope.deleteTrans = ($index) => {
    $scope.trans.splice($index,1);

  };



  $scope.getTotal = () => {
    let total = 0;
    for(let i = 0; i < $scope.trans.length; i++) {
      total += $scope.trans[i].amount;
    }

    $scope.total= total;
    // console.log($scope.total);
    return total;

  };

});


