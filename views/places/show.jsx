const React = require('react')
const Def = require('../default')


function show(data){
    let comments = (
        <h3 className = "inactive">
            No comments yet!
        </h3>
    )
    if(data.place.comment.length){
        comments = data.place.comments.map(c => {
            return(
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating : {c.stars}</h4>
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
                <h2>Currently Unrated</h2>
                <h2>Comments</h2>
                {comments}
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