const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places})
})


router.get('/new', (req, res) => {
    res.render('places/new')
})


router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }else{
        res.render('places/show',{place:places[id], id})
    }
})


router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
        if (isNaN(id)){
            res.render('error404')
        }
        else if (!places[id]){
            res.render('error404')
        }
        else{
            res.render('places/edit', {places:places[id]})
        }
})

router.post('/', (req, res) => {
    //console.log(req.body)
    if(!req.body.pic.image){
        //Default image if one is not provided
        req.body.pic.image ="http://placekitten.com/400/400"
    }
    if(!req.body.city){
        req.body.city = 'Anytown'
    }
    if(!req.body.state){
        req.body.state = 'USA'
    }
    places.push(req.body)
    //res.send('POST /places')
    res.redirect('/places')
})

router.put('/:id', (req, res) =>{
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.render('error404')
    }
    else if(!places[id]){
        res.render('error404')
    }
    else{
        //Dig into req.body and make sure data is valid
        if(!req.body.pic){
            //Default image if one is not provided
            req.body.pic = 'http//placekitten.com/400/400'
        }
        if(!req.body.city){
            req.body.city= 'Anytown'
        }
        if(!req.body.state){
            req.body.state ='USA'
        }
        //Save the new data into places[id]
        places[id]= req.body
        res.redirect(`/places/${id}`)
    }
})

router.delete('/places/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else{
        places.splice(id, 1)
        res.redirect('/places')
    }
})
/*router.get('/', (req, res) => {
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
})*/

module.exports = router