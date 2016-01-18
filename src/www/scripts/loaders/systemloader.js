System.config({
    baseURL: '/scripts',
    defaultJSExtensions:true,
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js'
    },
});

System.import('app');