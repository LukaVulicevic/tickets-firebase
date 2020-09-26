import React from 'react'
import './styles/page-counter.css'

export default function PageCounter({children}) {
    return (
        <div className="container pagination">
            <div className="inner">
                {children}
            </div>
        </div>
    )
}

PageCounter.Btn = function PageCounterBtn ({children, ...restProps}) {
    return (
        <button 
            className="page-counter-btn"
            {...restProps}
        >
            {children}
        </button>
    )
}

PageCounter.CurrentPage = function PageCounterCurrentPage ({children}) {
    return (
        <h2 className="page-counter"> {children} </h2>
    )
}