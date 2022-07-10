const router = require('express').Router()


router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: {
            image: '/images/curry.jpg',
            credit: 'Photo by Bruna Branco on Unsplash'
        }
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: {
            image: '/images/cafe.jpg',
            credit: 'Phot by Petr Sevcovic on Unsplash'
        }
    }]
    res.render('places/index', {places})
})

module.exports = router