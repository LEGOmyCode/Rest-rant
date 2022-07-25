const React = require('react')
const Def = require('../default')


function show(data){
    let comments = (
        <h3 className = "inactive">
            No comments yet!
        </h3>
    )
    let rating= (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if(data.place.comment.length){
        let sumRatings = data.place.comments.reduce((tot, c) =>{
            return tot + c.stars
        },0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ' '
        for( let i = 0; i < averageRating; i++){
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} Stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return(
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating : {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
                </div>
            )
        })
    }
    let message = ' '
    if (data.message){
        message = (
            <h4 className= "alert-danger">{data.message}</h4>
        )
    }
    return(
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                {message}
                <h3>located in {data.place.city}, {data.place.state}</h3>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <h2>Rating</h2>
                {rating}
                <br />
                <h2>Comments</h2>
                {comments}
                <form method="POST" action={`/places/${data.id}/comment?_method=POST`}>
                    <label htmlFor="author">Author</label>
                    <input 
                        type="text"
                        name="author"
                        id="author"/>
                    <label htmlFor="content">Content</label>
                    <textarea 
                        name="content"
                        id="content"
                    />
                    <label htmlFor="stars">Star Rating</label>
                    <input 
                        type="number"
                        name="stars"
                        id="stars"
                        min="1"
                        max="5"
                    />
                    <label htmlFor="rant">Rant</label>
                    <input 
                        type="checkbox"
                        name="rant"
                        id="rant"
                        value="rant"
                    />
                    <br/>
                    <input type="submit"/>
                </form>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )

}

module.exports = show