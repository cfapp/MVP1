angular.module('crossFitApp.controllers', [])

.controller('WODCtrl', function($scope) {})

.controller('PersonalBestCtrl', function($scope, PersonalBest) {
  $scope.lifts = PersonalBest.all();
})

.controller('TrainingNotesCtrl', function($scope) {})

