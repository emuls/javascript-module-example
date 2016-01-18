requirejs.config({
    baseUrl: '/scripts/require',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min'
    },
    shim: {
        "jquery": { exports: "$" },
        "angular" : {
            exports : "angular",
            deps: ["jquery"]
        }
    }
});

require(['app']);