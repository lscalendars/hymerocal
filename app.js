  if (Meteor.isClient) {
    angular.module('hymerocal',['angular-meteor','ngMaterial']);

    angular.module("hymerocal").controller("AppCtrl", ['$scope',
      function($scope){
        $scope.toggleSidenav = function(menuId) {
          $mdSidenav(menuId).toggle();
        };
        $scope.parties = [
          {'name': 'Dubstep-Free Zone',
            'description': 'Can we please just for an evening not listen to dubstep.'},
          {'name': 'All dubstep all the time',
            'description': 'Get it on!'},
          {'name': 'Savage lounging',
            'description': 'Leisure suit required. And only fiercest manners.'}
        ];

     }]);
  }
