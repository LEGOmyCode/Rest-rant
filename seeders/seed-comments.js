const db = require('../models')
//To use await, we need an async function.
async function seed(){
    //Get the place, H-Thai-ML
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    //Create a fake sample content
    let comment = await db.Comment.create({
        author:'Famished Fran',
        rant:false,
        stars:5,
        content:"Amazing"
    })
    //Add that comment to the place's content array.
    place.comment.push(comment.id)

    //Save the place now that it has comment 
    await place.save()

    //Exit the program
    process.exit()
}
seed()