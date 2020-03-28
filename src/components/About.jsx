import React from 'react'
import Rainbow from '../hoc/rainbow'

function About() {
    return (
        <div className='container'>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eos dolores unde, earum id ab mollitia in quos nemo pariatur sit ullam quis nam accusamus impedit consequuntur minima repellat a.</p>
        </div>
    )
}


export default Rainbow(About)