(function(ng){
    'use strict';

    var MODULE_NAME = 'angular-cc-logger';

    ng.
        module(MODULE_NAME, []);
}(angular));
(function (ng) {
    'use strict';

    var MODULE_NAME = 'angular-cc-logger';


    /**
     * ng-service to handle bugs and other notifications from browser
     *
     * @param {LoggerProvider} $provider
     * @constructor
     */
    function Logger($provider, $log){
        var $this = this;

        this.ERROR_LEVEL = 250;
        this.WARN_LEVEL = 251;
        this.NOTICE_LEVEL = 252;
        this.INFO_LEVEL = 253;

        this.configProvider = $provider;

        this.error = error;
        this.warn = warning;
        this.notice = notice;
        this.info = info;

        function error(message) {
            log.call($this, $this.ERROR_LEVEL, message);
            $log.error(message);
        }

        function warning(message) {
            log.call($this, $this.WARN_LEVEL, message);
            $log.warn(message);
        }

        function notice(message) {
            log.call($this, $this.NOTICE_LEVEL, message);
            $log.log(message);
        }

        function info(message) {
            log.call($this, $this.INFO_LEVEL, message);
            $log.info(message);
        }

        function log(level, message) {
            if (!this.configProvider.debug) {
                return;
            }

            for (var handler in this.configProvider.handlers) {
                $this.configProvider.handlers[handler](level, message);
            }
        }
    }

    Logger.$inject = [
        MODULE_NAME + '.$logger',
        '$log'
    ];

    ng
        .module(MODULE_NAME)
        .service(MODULE_NAME+'.Logger', Logger);
}(angular));
(function(){
    'use strict';

    var MODULE_NAME = 'angular-cc-logger';

    /**
     * @namespace angular-cc-logger
     * @name LoggerProvider
     * @desc Provider for logger module.
     *
     * @constructor
     */

    function LoggerProvider(){
        var $this = this;

        this.debug = true;
        this.handlers = [];

        this.pushHandler = pushHandler;

        /**
         * Function to insert new handler.
         *
         * @param {Function} func
         */
        function pushHandler(func){
            if(angular.isFunction(func)){
                $this.handlers.push(func);
            }
        }

        this.$get = function $get() {
            return $this;
        }
    }

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME +'.$logger', LoggerProvider);
}());