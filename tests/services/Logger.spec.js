describe('Unit: Logger', function () {
    beforeEach(module('angular-cc-logger'));

    /**
     *  @type {Logger}
     */
    var logger;

    var provider;

    beforeEach(inject(['angular-cc-logger.Logger', 'angular-cc-logger.$logger', function (Logger, $provider) {
        logger = Logger;
        provider = $provider;
    }]));

    it('should be defined', shouldBeDefined);
    it('should run old logger function', shouldCallLogger);
    it('should call logger with handler', shouldCallLoggerWithHandler);

    function shouldBeDefined() {
        expect(logger).toBeDefined();
    }

    function shouldCallLogger(){
        logger.error('some_error');
    }

    function shouldCallLoggerWithHandler(){
        var level = 250;
        var message = "test";

        var test = function(level, message){
            console.log(level+' funny '+message+' cats');
        };

        provider.pushHandler(test(level,message));

        logger.warn('some_warn');
    }

});

