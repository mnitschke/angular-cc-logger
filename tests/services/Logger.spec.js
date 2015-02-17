describe('Unit: Logger', function () {
    beforeEach(module('angular-cc-logger'));

    /**
     *  @type {Logger}
     */
    var logger;

    var provider;

    beforeEach(inject(['angular-cc-logger.$logger', '$log', function ($provider, $log) {
        provider = $provider;
        logger = $log;
    }]));

    it('should be defined', shouldBeDefined);
    it('should run old logger function', shouldCallLogger);
    it('should call logger with handler', shouldCallLoggerWithHandler);


    function shouldBeDefined(){
        expect(logger.ERROR_LEVEL).toBe(250);
    }

    function shouldCallLogger(){
        logger.error('some_error');
    }

    function shouldCallLoggerWithHandler(){
        var test = function(level, message){
            console.log(level+' funny '+message+' cats');
        };

        provider.pushHandler(test);

        logger.warn('some_warn');
    }

});

