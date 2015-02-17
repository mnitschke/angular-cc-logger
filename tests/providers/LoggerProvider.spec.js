describe('Unit: LoggerProvider', function () {
    beforeEach(module('angular-cc-logger'));

    /**
     *  @type {LoggerProvider}
     */
    var loggerProvider;
    beforeEach(inject(['angular-cc-logger.$logger', function (LoggerProvider) {
        loggerProvider = LoggerProvider;
    }]));

    it('should be defined', shouldBeDefined);
    it('should push handler into array', shouldPushHandlerIntoArray);

    function shouldBeDefined() {
        expect(loggerProvider).toBeDefined();
    }


    function shouldPushHandlerIntoArray() {
        var level = 10;
        var message = "test";


        loggerProvider.pushHandler(level, message);

        expect(loggerProvider.handlers.length).toBe(1);
        expect(loggerProvider.handlers[loggerProvider.handlers.length-1].level).toBe(10);
        expect(loggerProvider.handlers[loggerProvider.handlers.length-1].message).toBe("test");
    }
});

