import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const serviceID = 'service_blakemercer';
  const templateID = 'template_blakemercer';
  const userID = process.env.REACT_APP_USER_ID;

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );

    reset.target.reset();
  };
  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage('Email Sent, I will get back to you soon!');
      })
      .catch((error) => console.error(`something went wrong ${error}`));
  };

  return (
    <div className='contact'>
      <div className='text-center'>
        <h1>Contact Me</h1>
        <p>
          To contact me via email please fill out form and I will get back to
          you as soon as possible.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/* Name Input */}
              <div className='text-center'>
                <input //
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  ref={register({
                    required: 'Please Enter Your Name',
                    maxLength: {
                      value: 25,
                      message:
                        'Please enter a name with fewer than 25 characters',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              {/* Phone Input */}
              <div className='text-center'>
                <input //
                  type='text'
                  className='form-control'
                  placeholder='Phone Number'
                  name='phone'
                  ref={register({
                    required: 'Please Enter Your Phone Number',
                    pattern: {
                      value: /^\d+$/,
                      message: 'Enter Valid Number',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>
              {/* Email Input */}
              <div className='text-center'>
                <input //
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  ref={register({
                    required: 'Please Enter Your Email',
                    pattern: {
                      value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                      message: 'Invalid Email',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/* Subject Input */}
              <div className='text-center'>
                <input //
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  ref={register({
                    required: 'Please Enter A Subject',
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/* Description Input */}
              <div className='text-center'>
                <textarea //
                  type='text'
                  className='form-control'
                  placeholder='Let me know whats up!'
                  name='description'
                  ref={register({
                    required: 'Please Enter A Short Description',
                  })}></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
              <button className='btn-main-offer contact-btn' type='submit'>
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
