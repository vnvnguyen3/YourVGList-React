import React from 'react';

function Home() {
    return (
        <div className="panel">
            <div className="panel-heading">
                <h3><i className="fa fa-home" /> Welcome to YourVGList!</h3>
            </div>
            <div className="panel-body">
                <p>Not a member? We'd love to have you join our community. 
                    On YourVGList you can create your own profile, keep track of your video games, 
                    meet new friends, and even write reviews on your favorite games (or even for games you hated).
                    So what are you waiting for? <a href="/register">Registration is free</a> and only takes a few seconds! 
                    If you love video games, then come join our community!
                </p>
            </div>
        </div>
    )
}

export default Home