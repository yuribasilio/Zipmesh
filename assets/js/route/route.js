ngapp.config(function ($routeProvider) {


    $routeProvider.when('/', {
            templateUrl: 'assets/view/home.html',
            controller: 'homeCTRL'
        })
        .otherwise({
            redirectTo: '/'
        });

});