const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Dawid';
        var text = 'Test message';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});