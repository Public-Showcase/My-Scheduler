/**
 * 404 - page not found component
 */

import React from 'react'
import { Link } from 'react-router-dom'

const NotfoundPage = () => (
    <div>
        <h3>404 page not found!</h3>
        <Link to="/">Go home</Link>
    </div>
)

export default NotfoundPage

