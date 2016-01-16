define(['exalert'], function(exalert){
    var module = {
        setHtml: function(id, message){
            $('#' + id).html(message);
            exalert.exAlert("html changed");
        }
    };
    return module;
});