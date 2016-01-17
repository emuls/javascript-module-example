System.baseURL = 'scripts/modules';
System.defaultJSExtensions = true;

///Local JS Modules using JQuery///
System.paths['jquery'] = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
System.import('jquery').then(function(){
    $('#jqtest').html('JQuery has been loaded');
});
System.import('exalert').then(function(exa){
    console.log('exalert module loaded');
    window.exa = exa;
});
System.import('exhtml').then(function(htm){
    console.log('exhtm module loaded');
    window.htm = htm;
});


///Angular Modules///
System.paths['angular'] = '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js';
System.import('angularComponents');