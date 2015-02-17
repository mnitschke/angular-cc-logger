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
            $this.handlers.push(func);
        }

        this.$get = function $get() {
            return $this;
        }
    }

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME +'.$logger', LoggerProvider);
}());