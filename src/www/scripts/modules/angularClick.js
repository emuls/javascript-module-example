define(['exalert'],function(exalert){
    var module = {
        directive: function(){
            return {
                restrict: 'E',
                replace: false,
                template:'<input type="button" ng-click="exalert()" value="Call EXAlert"/>',
                compile:  function compile(element, attrs, fTransclude) {
                    return function($scope){
                        $scope.exalert = function(){
                            exalert.exAlert('Alert from AMD Dependency');
                        }
                    }
                }
            }
        }
    };
    return module;
});