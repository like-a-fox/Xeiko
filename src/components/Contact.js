import React from 'react'
import { addTaskToFirebase } from '../firebase/firebase'

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
})

const INITIAL_STATE = {
    name: '',
    email: '',
    message: ''
}

export default class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            ...INITIAL_STATE
        }
    }

    clearData = () => {
        this.setState(() => ({ ...INITIAL_STATE }))
    }
    render() {
        const {
            name,
            email,
            message
        } = this.state;

        const isInvalid = 
        name === '' ||
        email === '' ||
        message === ''

        return (
            <section id="contact">
            <div className="inner">
                <section>
                    <form
                    onSubmit={(e) => {
                    e.preventDefault()
                    const {name, email, message} = this.state
                    const date = Date();
                    const html = `
                    <div>From: ${name}</div>
                    <div>Email: <a href="mailto:${email}">${email}</a></div>
                    <div>Date: ${date}</div>
                    <div>Message: ${message}</div>
                    `;
                    let contactData = { name, email, message, date, html };
                    addTaskToFirebase(contactData)
                    this.clearData()
                    }}>
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required 
                            value={name} onChange={event => this.setState(updateByPropertyName('name', event.target.value))}/>
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            required 
                            value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))}/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea 
                            name="message" 
                            id="message" 
                            rows="6" 
                            required 
                            value={message} onChange={event => this.setState(updateByPropertyName('message', event.target.value))}></textarea>
                        </div>
                        <ul className="actions">
                            <li><input 
                            disabled={isInvalid}
                            type="submit" 
                            className="special" /></li>
                            <li><input 
                            type="reset" 
                            value="Clear"
                            onClick={this.clearData} /></li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-envelope"></span>
                            <h3>Email</h3>
                            <a href="#">likeafox.dev@gmail.com</a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-phone"></span>
                            <h3>Phone</h3>
                            <span>(206) 900-1026</span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-home"></span>
                            <h3>Address</h3>
                            <span>Hell On Earth<br />
                            Tucson, AZ 85739<br />
                            United States of America</span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
        )
    }
}