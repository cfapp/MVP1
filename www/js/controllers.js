angular.module('crossFitApp.controllers', [])

.controller('WODCtrl', function($scope) {})

.controller('PersonalBestCtrl', function($scope, PersonalBest, $stateParams) {
  $scope.lifts = PersonalBest.all();
  $scope.lift = PersonalBest.get($stateParams.liftId);
})

.controller('TrainingNotesCtrl', function($scope) {})

