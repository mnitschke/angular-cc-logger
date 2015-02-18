describe('Unit: LoggerProvider', function () {
    beforeEach(module('angular-cc-logger'));

    var loggerProvider,
        test_1,
        test_2;

    test_1 = function(level, message){
        console.log(level+' funny '+message+' cats');
    };

    test_2 = 5;

    beforeEach(inject(['angular-cc-logger.$logger', function (LoggerProvider) {
        loggerProvider = LoggerProvider;

    }]));

    it('should be defined', shouldBeDefined);
    it('should push handler into array', shouldPushHandlerIntoArray);
    it('should add only functions', shouldAddOnlyFunctions);

    function shouldBeDefined() {
        expect(loggerProvider).toBeDefined();
    }

    function shouldPushHandlerIntoArray() {
        loggerProvider.pushHandler(test_1);
        expect(loggerProvider.handlers.length).toBe(1);
    }

    function shouldAddOnlyFunctions(){
        loggerProvider.pushHandler(test_1);
        loggerProvider.pushHandler(test_2);

        expect(loggerProvider.handlers.length).toBe(1);
    }
});