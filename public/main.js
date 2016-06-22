'use strict';

let app = angular.module('myApp', []);


app.controller('mainCtrl', function($scope, $interval) {


  $scope.contacts = [{name:'thomas', email: 'test@emal.com', phone:'32178912'}];

  $scope.addContact = () => {

    let newContact = angular.copy($scope.newContact);
    $scope.contacts.push(newContact);
    $scope.newContact = '';


  };

  $scope.deleteContact = ($index) => {
    $scope.contacts.splice($index,1);

  }

});
