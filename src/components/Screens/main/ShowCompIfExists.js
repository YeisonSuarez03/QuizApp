import React from 'react'
import { NothingToSee } from './NothingToSee'

export const ShowCompIfExists = ({element, component: Component}) => {
    return (
        <>
        {
            (element)
            ? (<Component />)
            : (<NothingToSee />)
        }
            
        </>
    )
}
