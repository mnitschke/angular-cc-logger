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
    //it('should push handler into array', shouldPushHandlerIntoArray);

    function shouldBeDefined() {
        expect(loggerProvider).toBeDefined();
    }


    //function shouldPushHandlerIntoArray() {
    //    var level = 10;
    //    var message = "test";
    //
    //    // don't know how to call this neither   |  error expected
    //    var handler = new Handler;
    //
    //    //handler.setHandler(message, level);
    //
    //    expect(handler.message.toBe("test"));
    //    expect(handler.level.toBe(10));
    //
    //    //loggerProvider.pushHandler(handler);
    //
    //    expect(loggerProvider.handlers.length).toBe(1);
    //}
});