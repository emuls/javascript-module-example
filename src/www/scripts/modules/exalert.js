define('exalert', [], function(){
   var module = {
       exAlert: function(message){
           alert("EX: " + message);
       }
   };
    return module;
});