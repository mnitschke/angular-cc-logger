(function(ng){
    "use strict";

    var MODULE_NAME = "ccLogger";

    ng
        .module(MODULE_NAME, [])
        .provider('$exceptionHandler', {
            $get: function(){
                return
            }
        });
}(angular));