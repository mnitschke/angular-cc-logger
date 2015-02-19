describe('Unit: Logger', function () {
    var loggerService,
        loggerProvider,
        $log,
        MODULE_NAME = 'angular-cc-logger';

    beforeEach(module(MODULE_NAME));

    /**
     * First mocked handler
     *
     * @param level
     * @param message
     */
    var test_1 = function(level, message){
        console.log('Created to check if test_1 runs properly');
    };

    /**
     * Second mocked handler
     *
     * @param level
     * @param message
     */
    var test_2 = function(level, message){
        console.info('Created to check if test_2 runs properly');
    };

    /**
     * Injecting and creating mocked service and provider objects
     */
    beforeEach(inject(['angular-cc-logger.Logger', 'angular-cc-logger.$logger', '$log', function (Logger, provider, log) {
        loggerService = Logger;
        loggerProvider = provider;
        $log = log;
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
    }

    /**
     * Tests for Logger service
     */
    describe('testing each of Logger function', function(){

        /**
         * Filling handlers table with two mocked functions and start to spy on $log functions
         */
        beforeEach(function () {
            loggerProvider.pushHandler(test_1);
            loggerProvider.pushHandler(test_2);

            spyOn($log, 'error');
            spyOn($log, 'warn');
            spyOn($log, 'log');
            spyOn($log, 'info');

            spyOn(console, 'log');
            spyOn(console, 'info');
        });

        /**
         * Tests
         */
        it('should run logger with disabled debugger', shouldRunLoggerWithDisabledDebugger);
        it('should run logger error', shouldRunLoggerError);
        it('should run logger warning', shouldRunLoggerWarn);
        it('should run logger notice', shouldRunLoggerNotice);
        it('should run logger info', shouldRunLoggerInfo);

        function shouldRunLoggerWithDisabledDebugger(){
            loggerProvider.debug = false;

            loggerService.error('error');
            expect(console.log).not.toHaveBeenCalled();
        }

        /**
         * Running logger.error function
         */
        function shouldRunLoggerError(){
            loggerService.error('error');
            expect($log.error).toHaveBeenCalled();

            expect(console.log).toHaveBeenCalled();
            expect(console.info).toHaveBeenCalled();
        }

        /**
         * Running logger.warn function
         */
        function shouldRunLoggerWarn(){
            loggerService.warn('warn');
            expect($log.warn).toHaveBeenCalled();

            expect(console.log).toHaveBeenCalled();
            expect(console.info).toHaveBeenCalled();
        }

        /**
         * Running logger.notice function
         */
        function shouldRunLoggerNotice(){
            loggerService.notice('notice');
            expect($log.log).toHaveBeenCalled();

            expect(console.log).toHaveBeenCalled();
            expect(console.info).toHaveBeenCalled();
        }

        /**
         * Running logger.info function
         */
        function shouldRunLoggerInfo(){
            loggerService.info('info');
            expect($log.info).toHaveBeenCalled();

            expect(console.log).toHaveBeenCalled();
            expect(console.info).toHaveBeenCalled();
        }
    });
});