/**
 * Loading page, for showing when expense data loads for first time
 */

import React from 'react'

import { Bounce } from 'react-activity'

import '../styles/LoadingPage.css'

const LoadingPage = () => (
    <div className="loader">
        {
            // <img className="loader__image" alt="Loading..." src="/images/loader.gif" />
        }
        <h1 className="loader_title">Triage webapp</h1>
        <div className="loader_animation">
            <div className="loader_text">Loading</div>
            <Bounce />
        </div>
    </div>
)

export default LoadingPage
