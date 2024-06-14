/**
 * Loading page, for showing when expense data loads for first time
 */

import React from 'react'

import { Bounce } from 'react-activity'

import '../styles/ActivityIndicator.css'

const ActivityIndicator = () => (
    <div className="ActivityIndicator__parent">
        <div className="ActivityIndicator">
            <div className="ActivityIndicator_text">
                Loading Tasks and Settings data
            </div>
            <Bounce />
        </div>
    </div>
)

export default ActivityIndicator
