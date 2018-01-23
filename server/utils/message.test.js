var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'SomeTestUser';
        var long = 1;
        var lat = 2;
        var url = `https://maps.google.com/maps/?q=${long},${lat}`;
        var message = generateLocationMessage(from, long, lat);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});        
    });
});