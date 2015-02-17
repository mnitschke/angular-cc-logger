describe('Unit: LoggerProvider', function () {
    beforeEach(module('angular-cc-logger'));

    /**
     *  @type {LoggerProvider}
     */
    var loggerProvider;
    var log;
    beforeEach(inject(['angular-cc-logger.$logger', '$log', function (LoggerProvider, $log) {
        loggerProvider = LoggerProvider;
        log = $log;
    }]));

    it('should be defined', shouldBeDefined);
    it('should push handler into array', shouldPushHandlerIntoArray);

    function shouldBeDefined() {
        expect(loggerProvider).toBeDefined();
    }

    function shouldPushHandlerIntoArray() {
        log.info('ciekawe');

        var test = function(level, message){
            console.log(level+' funny '+message+' cats');
        };

        loggerProvider.pushHandler(test);
        expect(loggerProvider.handlers.length).toBe(1);
    }
});

