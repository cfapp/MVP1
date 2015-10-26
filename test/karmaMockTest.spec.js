describe('Controllers', function() {

  var scope;
  var control;

  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    control = $controller('AccountCtrl', {$scope: scope});
  }));

  it('exercise test', function() {
    expect(scope.settings.enableFriends).toEqual(true);
  });
});