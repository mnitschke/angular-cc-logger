describe('Unit: LoggerProvider', function () {
    beforeEach(module('angular-cc-logger'));

    var loggerProvider,
        log,
        test;

    test = function(level, message){
        console.log(level+' funny '+message+' cats');
    };

    beforeEach(inject(['angular-cc-logger.$logger', function (LoggerProvider) {
        loggerProvider = LoggerProvider;

    }]));

    it('should be defined', shouldBeDefined);
    it('should push handler into array', shouldPushHandlerIntoArray);

    function shouldBeDefined() {
        expect(loggerProvider).toBeDefined();
    }

    function shouldPushHandlerIntoArray() {
        loggerProvider.pushHandler(test);
        expect(loggerProvider.handlers.length).toBe(1);
    }
});