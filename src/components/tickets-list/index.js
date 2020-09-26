import React from 'react'
import {Link} from 'react-router-dom'
import './styles/tickets-list.css'

export default function TicketsList ({children}) {
    return (
        <div className="container tickets-list">
            {children}
        </div>
    )
}

TicketsList.Item = function TicketsListItem ({children}) {
    return (
        <div className="ticket">
            {children}
        </div>
    )
}

TicketsList.ItemTitle = function TicketsListItemTitle ({children}) {
    return (
        <h2 className="ticket-title">
            {children}
        </h2>
    )
}

TicketsList.ItemEdit = function TicketsListItemEdit ({itemId, ...otherProps}) {
    return (
        <Link 
            to={`/edit/${itemId}`} 
            className="ticket-edit"
            {...otherProps}
        >
            <h2>
                <i class="ri-settings-2-fill"></i>
            </h2>
        </Link>
    )
}

TicketsList.ItemDate = function TicketsListItemDate ({children}) {
    return (
        <p className="ticket-date">
            {children}
        </p>
    )
}

TicketsList.ItemUser = function TicketsListItemUser ({children}) {
    return (
        <p className="ticket-user">
            {children}
        </p>
    )
}

TicketsList.ItemCategory = function TicketsListItemCategory ({children}) {
    return (
        <h3 className="ticket-category">
            {children}
        </h3>
    )
}

TicketsList.ItemUrgency = function TicketsListItemUrgency ({children}) {
    return (
        <h3 className="ticket-urgency">
            {children}
        </h3>
    )
}

TicketsList.ItemDesc = function TicketsListItemDesc ({children}) {
    return (
        <p className="ticket-desc">
            {children}
        </p>
    )
}