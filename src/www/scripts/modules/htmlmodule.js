define('htm', function(){
    var module = {
        setHtml: function(id, message){
            $('#' + id).html(message);
        }
    };
    return module;
});