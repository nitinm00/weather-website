const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d897646e703b981e5acc2d7774eba946/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.daily.data
            const precipData = data.map((day) => day.precipProbability)
            console.log(precipData)
            callback(undefined, {
                text: body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.',
                precipitation: precipData
            })
        }
    })
}

module.exports = forecast