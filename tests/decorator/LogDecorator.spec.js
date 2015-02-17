describe('Unit: LoggerDecorator', function () {
    beforeEach(module('angular-cc-logger'));

    /**
     *  @type {LoggerDecorator}
     */
    var log;
    var provider;
    beforeEach(inject(['$log', 'angular-cc-logger.$logger', function (_$log_, $provider) {
        log = _$log_;
        provider = $provider;
    }]));

    it('should be defined', shouldBeDefined);
    it('should push handler into array', shouldPushHandlerIntoArray);

    function shouldBeDefined() {
        expect(log).toBeDefined();
        expect(provider).toBeDefined();
    }

    function shouldPushHandlerIntoArray(){
        log.error('mamy error');

        expect(provider.pushHandler).toHaveBeenCalled(1);
    }

});