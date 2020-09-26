import React from 'react'
import {Header} from '../components'

export function HeaderLayout() {
    return (
        <Header>
            <Header.Logo>
                Tickets
            </Header.Logo>
            <Header.Searchbar>
                <Header.SearchInput 
                    placeholder="keyword"
                />
                <Header.SearchBtn>
                    Search
                </Header.SearchBtn>
            </Header.Searchbar>
            <Header.AddBtn>
                Place ticket
            </Header.AddBtn>
        </Header>
    )
}