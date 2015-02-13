(function (ng) {
    "use strict";

    var MODULE_NAME = 'ccLogger';

    function Logger(provider){
        var $this = this;

        this.error = logError;
        this.warning = logWarning;
        this.notice = logNotice;
        this.info = logInfo;


        /**
         * Function to handle errors
         * @param message
         */
        function logError(message) {
            if(provider.debugStatus()){
                console.error(message);
            }
        }

        /**
         * Function to handle warnings
         * @param message
         */
        function logWarning(message) {
            if(provider.debugStatus()){
                console.warn(message);
            }
        }

        /**
         * Function to handle notices
         * @param message
         */
        function logNotice(message) {
            if(provider.debugStatus()){
                console.log(message);
            }
        }

        /**
         * Function to handle infos
         * @param message
         */
        function logInfo(message) {
            if(provider.debugStatus()){
                console.info(message);
            }
        }
    }

    ng
        .module(MODULE_NAME)
        .factory('$exceptionHandler',[
            MODULE_NAME + '.$loggerProvider', function(){
                return new Logger(exception, cause);
            }
        ]);

}(angular));