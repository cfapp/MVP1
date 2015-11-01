describe('Controllers', function() {

  var scope;
  var control;

  beforeEach(module('crossFitApp.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    control = $controller('WODCtrl', {$scope: scope});
  }));

  it('exercise test', function() {
    expect(scope).toBeDefined();
  });
});
