define('app', ['modules/exalert','modules/exhtml','modules/angularComponents'],function(exa, exhtm, angularComponents){
    window.exa = exa;
    window.htm = exhtm;
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['moduleApp']);
    });
    $('#jqtest').html('JQuery has been loaded because it is a dependency of angular components');
});