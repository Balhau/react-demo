import React from 'react'

const withPiroquinha = (WrappedComponent : any,piroquinha: String) =>{
    return (props : any) => {
        return (
            <WrappedComponent piroquinha={piroquinha} {...props}/>
        )
    }
}