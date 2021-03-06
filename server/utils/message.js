const moment = require('moment');

var generateMessage = (from, text) =>{
    return {
        from, text, createdAt: moment().valueOf()
    };
};

var generateLocationMessage = (from, longitude, latitude) => {
    return {
        from,
        url: `https://maps.google.com/maps/?q=${longitude},${latitude}`,
        createdAt: moment().valueOf()
    }
};

module.exports = {generateMessage, generateLocationMessage};