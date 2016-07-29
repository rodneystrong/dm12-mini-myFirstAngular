angular
  .module('friendsList')
  .controller('MainCtrl', function($scope) {
    $scope.fakeFriends = [
      'jake',
      'john',
      'jared'
    ];
  });
