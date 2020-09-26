import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
import { firestore } from '../firebase/firebase.utils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EditTicketLayout() {

    const currentTicket = JSON.parse(localStorage.getItem('currentTicket'))

    const [userName, setUserName] = useState(currentTicket.userName)
    const [title, setTitle] = useState(currentTicket.title)
    const [category, setCategory] = useState(currentTicket.category)
    const [urgency, setUrgency] = useState(currentTicket.urgency)
    const [description, setDescription] = useState(currentTicket.description)

    const history = useHistory()

    const handleEdit = (e) => {
        e.preventDefault()

        firestore.collection('tickets').doc(currentTicket.docId).delete()
        firestore.collection('tickets').add({
            userName,
            title,
            date: currentTicket.date,
            category,
            urgency,
            description
        })

        toast.success('Edited', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        firestore.collection('tickets').doc(currentTicket.docId).delete()

        toast.error('Deleted', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(() => {
            history.push('/')
        }, [2000])
    }

    return (
        <Form>
            <Form.Input 
                type="text"
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Input 
                type="text"
                placeholder="Ticket title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
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
            <Form.TextArea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Submit
                style={{backgroundColor: "#c2000d", color: "#e0e0e0"}}
                onClick={handleDelete}
            >
                Delete
            </Form.Submit>
            <Form.Submit
                onClick={handleEdit}
            > 
                Edit 
            </Form.Submit>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Form>
    )
}