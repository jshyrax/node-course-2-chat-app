var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct object', () => {
        var from = 'me';
        var text = 'this is some test text'
        var res = generateMessage(from, text);
 
        expect(res.from).toEqual(from);        
        expect(res.text).toEqual(text);        
        expect(res.createdAt).toBeA('number');
    });
});