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

        var test = function(level, message){
            console.log('funny cats');
        };

        loggerProvider.pushHandler(test(level,message));

        expect(loggerProvider.handlers.length).toBe(1);
    }
});

