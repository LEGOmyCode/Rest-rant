const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1> HOME </h1>
                <div>
                    <img src="/images/breadboard.jpg" alt="breads"/>
                    <div>
                        //credit photo 
                        Photo by <a href="https://unsplash.com/@mitifotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Miti</a> on <a href="https://unsplash.com/s/photos/bread?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className = "btn-primary"> Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home