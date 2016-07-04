ngapp.controller("signinCreateCTRL", function ($scope, $mdToast) {

    
    $scope.cart = 6;

    
    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    $scope.toastPosition = angular.extend({},last);
    $scope.getToastPosition = function() {
        sanitizePosition();
        return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };

    function sanitizePosition() {
        var current = $scope.toastPosition;
        if ( current.bottom && last.top ) current.top = false;
        if ( current.top && last.bottom ) current.bottom = false;
        if ( current.right && last.left ) current.left = false;
        if ( current.left && last.right ) current.right = false;
        last = angular.extend({},current);
    }


    $scope.custom = true;
    $scope.toggleManu = function(){
        $scope.custom = $scope.custom === false ? true: false;
    }

    $scope.showSimpleToast = function() {
        var pinTo = $scope.getToastPosition();
        $mdToast.show(
            $mdToast.simple()
            .textContent('Notifications updated!')
            .position(pinTo )
            .hideDelay(2000)
        );
    };

});