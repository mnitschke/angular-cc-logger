describe('Unit: Logger', function () {
    beforeEach(module('angular-cc-logger'));

    var loggerService,
        loggerProvider;

    var test_1 = function(level, message){
        console.log(level+': '+message);
    };

    var test_2 = function(level, message){
        console.error(message+', '+message);
    };

    var test_3 = 5;

    beforeEach(inject(['angular-cc-logger.Logger', 'angular-cc-logger.$logger', function (Logger, provider) {
        loggerService = Logger;
        loggerProvider = provider;
    }]));

    it('should be defined', shouldBeDefined);

    function shouldBeDefined(){
        expect(loggerService).toBeDefined();
        expect(loggerProvider).toBeDefined();
    }

    describe('testing each of Logger function', function(){
        beforeEach(function () {
            loggerProvider.pushHandler(test_1);
            loggerProvider.pushHandler(test_2);
        });

        it('should be defined (handler)', shouldBeDefinedHandler);
        it('should run logger error', shouldRunLoggerError);
        it('should run logger warning', shouldRunLoggerWarn);
        it('should run logger notice', shouldRunLoggerNotice);
        it('should run logger info', shouldRunLoggerInfo);

        function shouldBeDefinedHandler(){
            for(var i in loggerProvider.handlers){
                expect(loggerProvider.handlers[i]).toBeDefined();
                expect(angular.isFunction(loggerProvider.handlers[i])).toBe(true);
            }
        }

        function shouldRunLoggerError(){
            loggerService.error('error');
        }

        function shouldRunLoggerWarn(){
            loggerService.warn('warn');
        }

        function shouldRunLoggerNotice(){
            loggerService.notice('notice');
        }

        function shouldRunLoggerInfo(){
            loggerService.info('info');
        }
    });
});
