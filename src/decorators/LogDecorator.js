(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-logger';

    /**
     * Decorator for $log
     *
     * @param $delegate
     * @param {LoggerProvider} $provider
     * @returns {*}
     * @constructor
     */

    function LogDecorator($delegate, $provider){
        var oldError = $delegate.error();
        var oldWarn = $delegate.warn();
        var oldNotice = $delegate.log();
        var oldInfo = $delegate.info();

        $delegate.error = error;
        $delegate.warn = warn;
        $delegate.log = log;
        $delegate.info = info;


        /**
         * Pushing error handler into container
         */
        function error(){
            $delegate.error.apply(null,arguments);
            $provider.pushHandler($provider.ERROR_LEVEL, arguments);
        }

        /**
         * Pushing warn handler into container
         */
        function warn(){
            $delegate.warn.apply(null,arguments);
            $provider.pushHandler($provider.WARN_LEVEL, arguments);
        }

        /**
         * Pushing log handler into container
         */
        function log(){
            $delegate.log.apply(null,arguments);
            $provider.pushHandler($provider.NOTICE_LEVEL, arguments);
        }

        /**
         * Pushing info handler into container
         */
        function info(){
            $delegate.info.apply(null,arguments);
            $provider.pushHandler($provider.INFO_LEVEL, arguments);
        }

        return $delegate;
    }

    angular
        .module(MODULE_NAME)
        .config(["$provide"], function($provide){
            $provide.decorator('$log', ["$delegate", MODULE_NAME+".$logger", function($delegate, $provider){
                LogDecorator($delegate, $provider);
            }]);
        });


}());