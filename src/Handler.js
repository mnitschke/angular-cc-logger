(function () {
    'use strict';

    function Handler(){
        var $this = this;
        this.message = 'Message';
        this.level = 5;

        this.getHandler = getHandler;
        this.setHandler = setHandler;

        /**
         * Get handler
         * @returns {{message: *, level: (*|number)}}
         */
        function getHandler(){
            return {
                "message": $this.message,
                "level": $this.level
            };
        }


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
});