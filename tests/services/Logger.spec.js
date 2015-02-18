describe('Unit: Logger', function () {
    beforeEach(module('angular-cc-logger'));

    var loggerService,
        loggerProvider;

    /**
     * First mocked handler
     *
     * @param level
     * @param message
     */

    var test_1 = function(level, message){
        console.log(level+': '+message);
    };

    /**
     * Second mocked handler
     *
     * @param level
     * @param message
     */

    var test_2 = function(level, message){
        console.error(message+', '+message);
    };

    /**
     * Injecting and creating mocked service and provider objects
     */

    beforeEach(inject(['angular-cc-logger.Logger', 'angular-cc-logger.$logger', function (Logger, provider) {
        loggerService = Logger;
        loggerProvider = provider;
    }]));

    /**
     * Tests
     */

    it('should be defined', shouldBeDefined);

    /**
     * Checking if mocked objects are defined
     */

    function shouldBeDefined(){
        expect(loggerService).toBeDefined();
        expect(loggerProvider).toBeDefined();
    }

    /**
     * Tests for Logger service
     */

    describe('testing each of Logger function', function(){

        /**
         * Filling handlers table with two mocked functions
         */
        beforeEach(function () {
            loggerProvider.pushHandler(test_1);
            loggerProvider.pushHandler(test_2);
        });

        /**
         * Tests
         */
        it('should be defined (handler)', shouldBeDefinedHandler);
        it('should run logger error', shouldRunLoggerError);
        it('should run logger warning', shouldRunLoggerWarn);
        it('should run logger notice', shouldRunLoggerNotice);
        it('should run logger info', shouldRunLoggerInfo);

        /**
         * Checking if handlers are defined and if are functions
         */
        function shouldBeDefinedHandler(){
            for(var i in loggerProvider.handlers){
                expect(loggerProvider.handlers[i]).toBeDefined();
                expect(angular.isFunction(loggerProvider.handlers[i])).toBe(true);
            }
        }

        /**
         * Running logger.error function
         */
        function shouldRunLoggerError(){
            loggerService.error('error');
        }

        /**
         * Running logger.warn function
         */
        function shouldRunLoggerWarn(){
            loggerService.warn('warn');
        }

        /**
         * Running logger.notice function
         */
        function shouldRunLoggerNotice(){
            loggerService.notice('notice');
        }

        /**
         * Running logger.info function
         */
        function shouldRunLoggerInfo(){
            loggerService.info('info');
        }
    });
});
