import React from 'react'
import {Link} from 'react-router-dom'
import './styles/header.css'

export default function Header ({children}) {
    return (
        <header>
            <div className="container header">
                {children}
            </div>
        </header>
    )
}

Header.Logo = function HeaderLogo ({children}) {
    return (
        <Link className="header-logo" to="/">
            {children}
        </Link>
    )
}

Header.Searchbar = function HeaderSearchbar ({children}) {
    return (
        <form className="header-search-bar"> 
            {children} 
        </form>
    )
}

Header.SearchInput = function HeaderSearchInput ({...restProps}) {
    return (
        <input 
            className="header-search-bar-input" 
            {...restProps} 
        />
    )
}

Header.SearchBtn = function SearchBtn ({children}) {
    return (
        <button className="header-search-bar-btn">
            {children}
        </button>
    )
}

Header.AddBtn = function AddBtn ({children}) {
    return (
        <Link className="header-add-button" to="/addticket">
            {children}
        </Link>
    )
}