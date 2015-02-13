(function (ng) {
    'use strict';

    var MODULE_NAME = 'ccLogger';

    function LoggerProvider(){
        var $this = this;

        this.debug_mode = false;

        this.debugEnable = debugEnable;
        this.debugDisable = debugDisable;
        this.debugStatus = debugStatus;

        /**
         * Enable debug mode.
         */
        function debugEnable(){
            $this.debug_mode = true;
        }

        /**
         * Disable debug mode.
         */
        function debugDisable(){
            $this.debug_mode = true;
        }

        /**
         * Get debug mode status.
         * @returns {Boolean}
         */
        function debugStatus(){
            return $this.debug_mode;
        }

        this.$get = function $get() {
            return $this;
        }
    }

    ng
        .module(MODULE_NAME)
        .provider(MODULE_NAME+'.$ccLogerProvider', LoggerProvider);
}(angular));