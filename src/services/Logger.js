(function (ng) {
    'use strict';

    var MODULE_NAME = 'angular-cc-logger';


    /**
     * ng-service to handle bugs and other notifications from browser
     *
     * @param {LoggerProvider} $provider
     * @constructor
     */
    function Logger($provider){
        var $this = this;

        this.ERROR_LEVEL = 250;
        this.WARN_LEVEL = 251;
        this.NOTICE_LEVEL = 252;
        this.INFO_LEVEL = 253;

        this.configProvider = $provider;

        this.error = error;
        this.warn = warning;
        this.log = notice;
        this.info = info;

        function error(message) {
            logger.call($this, $this.ERROR_LEVEL, message);
        }

        function warning(message) {
            logger.call($this, $this.WARN_LEVEL, message);
        }

        function notice(message) {
            logger.call($this, $this.NOTICE_LEVEL, message);
        }

        function info(message) {
            logger.call($this, $this.INFO_LEVEL, message);
        }

        function logger(level, message) {
            if (!this.configProvider.debug) {
                return;
            }

            for (var handler in this.configProvider.handlers) {
                $this.configProvider.handlers[handler](level, message);
            }
        }
    }

    Logger.$inject = [
        MODULE_NAME + '.$logger'
    ];

    ng
        .module(MODULE_NAME)
        .service(MODULE_NAME +'.Logger', Logger);
}(angular));