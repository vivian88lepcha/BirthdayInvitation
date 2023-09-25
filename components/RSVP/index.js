import Image from 'next/image';
import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import SectionTitle from '../../components/SectionTitle'
import { useForm } from '@formcarry/react';

import shape1 from '/public/images/rsvp/shape1.png'
import shape2 from '/public/images/rsvp/shape2.png'

const RSVP = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        address: '',
        meal: '',
        attend: 'attend' // Set a default value for attend
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const validator = new SimpleReactValidator({
        className: 'errorMessage',
    });
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });
        validator.showMessages(); // Always show messages on change
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (validator.allValid()) {
            // Hide messages before sending the form
            validator.hideMessages();

            // Replace this with your own unique endpoint URL
            fetch('https://formcarry.com/s/LUcDb9nowe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(forms),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.code === 200) {
                        setSubmitted(true);
                    } else {
                        setError(res.message);
                    }
                })
                .catch((error) => setError(error));
        } else {
            validator.showMessages();
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (submitted) {
        return <p>We've received your message, thank you for contacting us!</p>;
    }

    return (
        <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="wpo-contact-form-area">
                        <SectionTitle MainTitle={'Are you attending?'} />

                        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                            <div className="form-field">
                                <input
                                    value={forms.name}
                                    type="text"
                                    name="name"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Your Name" />
                                {validator.message('name', forms.name, 'required|alpha_space')}
                            </div>
                            <div className="form-field">
                                <input
                                    value={forms.email}
                                    type="email"
                                    name="email"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Your Email" />
                                {validator.message('email', forms.email, 'required|email')}
                            </div>
                            <div className="radio-buttons">
                                <p>
                                    <input type="radio" id="attend" name="radio-group" defaultChecked />
                                    <label htmlFor="attend">Yes, I will be there</label>
                                </p>
                                <p>
                                    <input type="radio" id="not" name="radio-group" />
                                    <label htmlFor="not">Sorry, I can’t come</label>
                                </p>
                            </div>
                            <div className="form-field">
                                <input
                                    value={forms.attend}
                                    type="text"
                                    name="attend"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="What Will You Be Attending" />
                                {validator.message('attend', forms.attend, 'required')}
                            </div>
                            <div className="form-field">
                                <select
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    value={forms.meal}
                                    type="text"
                                    className="form-control"
                                    name="meal">
                                    <option>Meal Preferences</option>
                                    <option>Chicken Soup</option>
                                    <option>Motton Kabab</option>
                                    <option>Chicken BBQ</option>
                                    <option>Mix Salad</option>
                                    <option>Beef Ribs </option>
                                </select>
                                {validator.message('meal', forms.meal, 'required')}
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Submit Now</button>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt=""/>
            </div>
            <div className="shape-2">
                <Image src={shape2} alt=""/>
            </div>
        </section>
    )
}
export default RSVP;
