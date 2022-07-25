const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch((err) => {
        console.log('err')
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch((err) => {
        if(err && err.name == 'validationError'){
            let message = 'Validation Error: '
        //Generate Error message
        for(var field in err.errors){
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
            res.render('places/new', {message})
        }
        else{
            res.render('error404')
        }
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})


router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comment')
    .then(place => {
        console.log(place.comment)
        res.render('places/show', {place})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) =>{
   res.send('PUT /places/:id stub')
})

router.delete('/places/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET form edit stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:randId stub')
})

module.exports = router