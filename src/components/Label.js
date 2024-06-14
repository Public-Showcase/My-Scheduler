/**
 * Label component
 */

import React from 'react'

import '../styles/Label.css'

const Label = (props) => {
    if(props.display) {
        if(props.type === 'important') {
            return (
                <div className="label_text">
                    <font color="red">important</font>
                </div>
            )
        } else {
            return (
                <div className="label_text">
                    <font color="blue">urgent</font>
                </div>
            )
        }
    } else {
        return <></>
    }
}

export default Label
