import React from 'react'
import './styles/form.css'

export default function Form ({children, ...otherProps}) {
    return (
        <div className="form-container">
            <form className="ticket-form" {...otherProps}>
                {children}
            </form>
        </div>
    )
}

Form.Input = function FormInput ({...restProps}) {
    return (
        <input className="ticket-form-input" {...restProps}/>
    )
}

Form.TextArea = function FormTextArea ({...restProps}) {
    return (
        <textarea className="ticket-form-text-area" {...restProps}/>
    )
}

Form.Select = function FormSelect ({children, ...restProps}) {
    return (
        <select 
            className="ticket-form-select" 
            {...restProps}
        >
            {children}
        </select>
    )
}

Form.Submit = function FormSubmit ({children, ...restProps}) {
    return (
        <button 
            className="ticket-form-btn"
            {...restProps}
        > 
            {children} 
        </button>
    )
}