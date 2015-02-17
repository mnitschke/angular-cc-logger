(function () {
    'use strict';

    function Handler(){
        var $this = this;
        this.message = 'Message';
        this.level = 5;

        this.setHandler = setHandler;

        /**
         * Set handler
         * @param {String} message
         * @param {number} level
         */
        function setHandler(message, level){
            $this.message = message;
            $this.level = level;
        }
    }
}());