/**
 * SettingPage component
 */

import React from 'react'

const SettingPage = () => (
    <>
        <p className="not-dark-mode"> [[ Not theme affected element ]]</p>
        <button
            onClick={() => {
                console.log('yey! dark...')
                document.documentElement.classList.toggle('dark-mode')
                document
                    .querySelectorAll('.not-dark-mode')
                    .forEach((result) => {
                        result.classList.toggle('invert')
                    })
            }}
        >
            Change Theme
        </button>
    </>
)

export { SettingPage as default }
