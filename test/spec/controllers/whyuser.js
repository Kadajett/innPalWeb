'use strict';

describe('Controller: WhyuserCtrl', function () {

  // load the controller's module
  beforeEach(module('innPalWebApp'));

  var WhyuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhyuserCtrl = $controller('WhyuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
