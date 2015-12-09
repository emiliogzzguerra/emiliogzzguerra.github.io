
app.controller('DemoController',
    function DemoController($scope) {
      $scope.username = "Emilio";
      $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.username + '!';
      };
      $scope.demo1 = {
        min: 20,
        max: 80
      };
    }
    $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };
);