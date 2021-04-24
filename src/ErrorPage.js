import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="not-found">
            <h1>Oops - error404</h1>
            <br/>
            <h4>Page not found! </h4>
            <br/>
            <Link to="/">
                <button className="btn">
                    Back to Homepage
                </button>
            </Link>
        </div>
    )
}

export default ErrorPage
