define('angularBlue', [],function(){
    var module = {
        directive: function(){
            return {
                restrict: 'A',
                replace: false,
                priority: 99,
                terminal: true,
                compile:  function compile(element, attrs, fTransclude) {
                    element.css({"color": "blue"})
                }
            }
        }
    };
    return module;
});