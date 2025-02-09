import React from 'react'

export default function About() {

    return <>
        <div className="About text-white font-bold flex justify-center items-center bg-green-400">
            <h1>ABOUT COMPONENT</h1>
            <div className="container flex mt-10">
                <div className="row flex">
                    <div className="col-md-6">
                        <p className="text-white p1">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-white p2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>

    </>
}
