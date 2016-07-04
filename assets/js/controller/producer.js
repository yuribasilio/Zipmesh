ngapp.controller("producerCTRL", function ($scope) {


    $scope.cart = 6;

    $scope.title_product1 = "Small Hass Avocado Trio";
    $scope.total_producer1 = "2 producers";
    $scope.count_product1 = "Count 2";
    $scope.count_product_desc1 = "2 count";
    $scope.unit_product1 = "oz";
    $scope.image_product1 = "assets/img/produtcs-01.jpg";
    $scope.title_farm1 = "Eatwell Farm";
    $scope.value1_product1 = "2.39";
    $scope.value2_product1 = "4.99";

    $scope.title_product2 = "Small Hass Avocado Trio";
    $scope.total_producer2 = "2 producers";
    $scope.count_product2 = "7 count";
    $scope.count_product_desc2 = "2 count";
    $scope.unit_product2 = "oz";
    $scope.image_product2 = "assets/img/produtcs-02.jpg";
    $scope.title_farm2 = "Eatwell Farm";
    $scope.value1_product2 = "2.39";
    $scope.value2_product2 = "4.99";

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
        var total = 0;
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
    

});