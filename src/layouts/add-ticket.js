import React, {useState} from 'react'
import {Form} from '../components'
import dayjs from 'dayjs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {firestore} from '../firebase/firebase.utils'

export function AddTicketLayout(){
    const [userName, setUserName] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('hr')
    const [urgency, setUrgency] = useState('low')
    const [description, setDescription] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        firestore.collection('tickets').add({
            userName,
            title,
            date: dayjs().format('DD/MM/YYYY'),
            category,
            urgency,
            description
        })

        setUserName('')
        setTitle('')
        setCategory('hr')
        setUrgency('low')
        setDescription('')

        toast.success('Added ✔️', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }


    return (
        <Form onSubmit={handleSubmit}>
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
            <Form.Submit> Submit </Form.Submit>
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