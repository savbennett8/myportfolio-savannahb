import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    return (
        <section>
            <h1>Contact Info</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" name="name" defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" name="email" defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} />
                </div>
            </form>
        </section>
    );
};

export default ContactForm;