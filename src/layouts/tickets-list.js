import React, { useState, useEffect } from 'react'
import { TicketsList, PageCounter, Form } from '../components'
import { firestore } from '../firebase/firebase.utils'

export function TicketsListLayout (){
    const [currentPage, setCurrentPage] = useState(1)
    const [ticketsPerPage] = useState(6)
    const [tickets, setTickets] = useState([])
    const [category, setCategory] = useState('all')
    const [urgency, setUrgency] = useState('all')
    const [sort, setSort] = useState('desc')

    
    // Sorting logic and calling firebase
    useEffect(() => {
        firestore
                .collection('tickets')
                .orderBy('date', sort)
                .get()
                .then((snapshot) => {
                    const allContent = snapshot.docs.map((contentObj) => ({
                        ...contentObj.data(),
                        docId: contentObj.id
                    }))

                    setTickets(allContent)
                })
                .catch((error) => {
                    console.log(error.message)
                })
    }, [sort])
    
    
    // Filter logic
    const filteredTickets = tickets.filter( ticket => {
        if (category === 'all' && urgency === 'all') {
            return true
        } else if (category === 'all') {
            return (ticket.urgency === urgency)
        } else if (urgency === 'all') {
            return (ticket.category === category)
        }
        else {
            return (ticket.category === category && ticket.urgency === urgency)
        }
    })

    // Pagination logic
    const indexOfLastTicket = currentPage * ticketsPerPage
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage
    let currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket)


    return (
        <>
            <Form>
                <Form.Select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    >
                    <option value="desc"> 
                        Newest first
                    </option>
                    <option value="asc"> 
                        Oldest first
                    </option>
                </Form.Select>
                <Form.Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                    <option value="all"> 
                        All
                    </option>
                    <option value="hr"> 
                        Human Resources 
                    </option>
                    <option value="acct"> 
                        Accounting 
                    </option>
                    <option value="it"> 
                        Information Technology 
                    </option>
                </Form.Select>
                <Form.Select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    >
                    <option value="all"> 
                        All
                    </option>
                    <option value="low"> 
                        Low 
                    </option>
                    <option value="medium"> 
                        Medium 
                    </option>
                    <option value="high"> 
                        High 
                    </option>
                </Form.Select>
            </Form>
            <TicketsList>
                {
                    currentTickets.map (ticket => (
                        <TicketsList.Item key={ticket.docId}>
                            <TicketsList.ItemTitle>
                                {ticket.title}
                            </TicketsList.ItemTitle>
                            <TicketsList.ItemEdit 
                                itemId={ticket.docId}
                                onClick={() => localStorage.setItem('currentTicket', JSON.stringify(ticket))}
                            />
                            <TicketsList.ItemUser>
                                {ticket.userName}
                            </TicketsList.ItemUser>
                            <TicketsList.ItemDate>
                                {ticket.date}
                            </TicketsList.ItemDate>
                            <TicketsList.ItemCategory>
                                Category: {ticket.category.toUpperCase()}
                            </TicketsList.ItemCategory>
                            <TicketsList.ItemUrgency>
                                Priority: {ticket.urgency.toUpperCase()}
                            </TicketsList.ItemUrgency>
                            <TicketsList.ItemDesc>
                                {ticket.description}
                            </TicketsList.ItemDesc>
                        </TicketsList.Item>
                    ))
                }
            </TicketsList>
            <PageCounter>
                <PageCounter.Btn
                    onClick={() => setCurrentPage(prevPage => prevPage - 1)}
                    disabled={currentPage === 1 ? true : false}
                >
                    <i class="ri-arrow-left-line"></i>
                </PageCounter.Btn>
                <PageCounter.CurrentPage>
                    {currentPage}
                </PageCounter.CurrentPage>
                <PageCounter.Btn
                    onClick={() => setCurrentPage(prevPage => prevPage + 1)}
                    disabled={currentTickets.length < ticketsPerPage}
                >
                    <i class="ri-arrow-right-line"></i>
                </PageCounter.Btn>
            </PageCounter>
        </>
    )
}