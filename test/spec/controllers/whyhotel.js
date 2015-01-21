'use strict';

describe('Controller: WhyhotelCtrl', function () {

  // load the controller's module
  beforeEach(module('innPalWebApp'));

  var WhyhotelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhyhotelCtrl = $controller('WhyhotelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
