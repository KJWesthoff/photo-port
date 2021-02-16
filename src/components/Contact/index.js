import React, { useState } from "react";
import {validateEmail} from '../../utils/helpers';


function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;


  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(s) {

    if(s.target.name === 'email') {
        const isValid = validateEmail(s.target.value)
        
        if(!isValid){
            setErrorMessage("Your Email is not valid.");
        } else {
            setErrorMessage('');
        }     
    } else {
        if (!s.target.value.length) {
          setErrorMessage(`${s.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }

    if(!errorMessage) {  
        setFormState({ ...formState, [s.target.name]: s.target.value });
    }
    
  }

  function handleSubmit(s) {
      s.preventDefault();
      console.log(formState);
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>
        
        {errorMessage && (
            <div>
                <p className = "error-text">{errorMessage}</p>
            </div>
        )}
        
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
