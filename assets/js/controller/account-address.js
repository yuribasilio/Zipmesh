ngapp.controller("accountAddressCTRL", function ($scope, $mdToast) {

    
    $scope.cart = 6;

    $scope.title_product1 = "Small Hass Avocado Trio";
    $scope.total_producer1 = "2 producers";
    $scope.count_product1 = "2";
    $scope.count_product_desc1 = "2 count";
    $scope.unit_product1 = "oz";
    $scope.image_product1 = "assets/img/produtcs-01.jpg";
    $scope.title_farm1 = "Eatwell Farm";
    $scope.value1_product1 = "2.39";
    $scope.value2_product1 = "24.99";
    $scope.value1_delivery = "7.00";


    $scope.custom = true;
    $scope.toggleManu = function(){
        $scope.custom = $scope.custom === false ? true: false;
    }


    $scope.invoice = {
        items: [{
            qty: 0,
            description: 'item',
            cost: 0.00}]
    }
    
    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            description: 'item',
            cost: 0
        });
    }
    
    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    }
    
    $scope.total = function() {
        var total = 1;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty;
        })

        return total;
    }

    
    $scope.tab = 0;
    $scope.selectTab = function(setTab){
        $scope.tab = setTab;
    }
    
    $scope.isSelected = function(checkTab){
        return $scope.tab === checkTab;
    }
    
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

    $scope.showSimpleToast = function() {
        var pinTo = $scope.getToastPosition();
        $mdToast.show(
            $mdToast.simple()
            .textContent('Address updated!')
            .position(pinTo )
            .hideDelay(2000)
        );
    };

});