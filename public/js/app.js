const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

// msg1.textContent = 'From javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const url = '/weather?address=' + location

    msg1.textContent = 'Loading...'
    msg2.textContent = ''
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                msg1.textContent = data.error
                msg2.textContent = ''
            }
            else {
                msg1.textContent = data.location
                msg2.textContent = data.forecast
                // console.log(data.location)
                // console.log(data.forecast)
            }
        })
    })
    // console.log(location)
})

