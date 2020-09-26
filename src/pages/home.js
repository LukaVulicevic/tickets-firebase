import React from 'react'
import {HeaderLayout} from '../layouts/header'
import {TicketsListLayout} from '../layouts/tickets-list'

export default function Home () {
    return (
        <>
            <HeaderLayout />
            <TicketsListLayout />
        </>
    )
}