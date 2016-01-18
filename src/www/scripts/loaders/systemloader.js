System.baseURL = '/scripts/modules';
System.defaultJSExtensions = true;
System.paths['jquery'] = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
System.paths['angular'] = '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js';

///Local JS Modules using JQuery///
console.log('loading basic modules');
System.import('exalert').then(function(exa){
    console.log('exalert module loaded');
    window.exa = exa;
});
System.import('exhtml').then(function(htm){
    console.log('exhtm module loaded');
    window.htm = htm;
});

///Angular Modules///
console.log('loading angular components');
System.import('angularComponents').then(function(){
    console.log('bootstrapping angular');
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['moduleApp']);
    });
    $('#jqtest').html('JQuery has been loaded because it is a dependency of angular components');
});