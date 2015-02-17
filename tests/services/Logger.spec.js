describe('Unit: Logger', function () {
    beforeEach(module('angular-cc-logger'));

    var logger,
        provider,
        test;

    test = function(level, message){
        console.log('Level: '+level+'; Message: '+message+';');
    };

    beforeEach(inject(['angular-cc-logger.$logger', '$log', function ($provider, $log) {
        provider = $provider;
        logger = $log;
    }]));

    it('should be defined', shouldBeDefined);
    it('should run old logger function', shouldCallLogger);
    it('should call logger with handler', shouldCallLoggerWithHandler);


    function shouldBeDefined(){
        expect(logger).toBeDefined();
    }

    function shouldCallLogger(){
        logger.error('test');
    }

    function shouldCallLoggerWithHandler(){
        provider.pushHandler(test);

        logger.warn('test');
    }
});

