(function (ng) {
    'use strict';

    var MODULE_NAME = 'angular-cc-logger';

    function Logger($provider, $log){
        var $this = this;

        this.configProvider = $provider;
        this.$log = $log;

        /**
         * @readonly
         * @type {number}
         */
        this.INFO_LEVEL = 250;

        this.error = error;
        this.warning = warning;
        this.notice = notice;
        this.info = info;

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
        MODULE_NAME + '.$logger',
        '$log'
    ];

    ng
        .module(MODULE_NAME)
        .service(MODULE_NAME + '.logger', Logger);
}(angular));