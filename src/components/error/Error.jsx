import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return <>
        <h1 className='flex justify-center text-3xl text-red-500'>
            Error 404: Page not found
        </h1>
        <p className='flex justify-center items-center'>
            please return to Home page <Link to='' className='font-bold bg-blue flex p-5 justify-center items-center'>Home</Link>
        </p>

    </>
}
