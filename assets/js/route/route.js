ngapp.config(function ($routeProvider) {


    $routeProvider.when('/', {
            templateUrl: 'assets/view/home.html',
            controller: 'homeCTRL'
        })
        .when('/category', {
            templateUrl: 'assets/view/category.html',
            controller: 'categoryCTRL'
        })
        .when('/producer', {
            templateUrl: 'assets/view/producer.html',
            controller: 'producerCTRL'
        })
        .when('/search', {
            templateUrl: 'assets/view/search.html',
            controller: 'searchCTRL'
        })
        .when('/products', {
            templateUrl: 'assets/view/products.html',
            controller: 'productsCTRL'
        })
        .when('/cart', {
            templateUrl: 'assets/view/cart.html',
            controller: 'cartCTRL'
        })
        .when('/checkout', {
            templateUrl: 'assets/view/checkout.html',
            controller: 'checkoutCTRL'
        })
        .when('/account-info', {
            templateUrl: 'assets/view/account-info.html',
            controller: 'accountInfoCTRL'
        })
        .when('/account-address', {
            templateUrl: 'assets/view/account-address.html',
            controller: 'accountAddressCTRL'
        })
        .when('/account-notifications', {
            templateUrl: 'assets/view/account-notifications.html',
            controller: 'accountNotificationsCTRL'
        })
        .when('/signin-login', {
        templateUrl: 'assets/view/signin-login.html',
        controller: 'signinLoginCTRL'
    })
        .when('/signin-create', {
        templateUrl: 'assets/view/signin-create.html',
        controller: 'signinCreateCTRL'
    })
        .when('/signin-password', {
        templateUrl: 'assets/view/signin-password.html',
        controller: 'signinPasswordCTRL'
    })
        .when('/terms-of-use', {
        templateUrl: 'assets/view/terms-of-use.html',
        controller: 'termsOfUseCTRL'
    })
        .when('/privacy-policy', {
        templateUrl: 'assets/view/privacy-policy.html',
        controller: 'privacyPolicyCTRL'
    })
        .when('/copyright-policy', {
        templateUrl: 'assets/view/copyright-policy.html',
        controller: 'copyrightPolicyCTRL'
    })
    //        .otherwise({
//            redirectTo: '/'
//        });

});