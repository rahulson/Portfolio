import React from 'react'
import styled from 'styled-components';
import { ErrorMessage } from '../../utils/helper'
import { useForm } from 'react-hook-form';

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 color: white;
 align-items: center;
 justify-content: center;
 p {
    margin-top: 10px;
  }
`;


const encode = (data) =>
    Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');

const Contact = () => {
    const {
        register,
        errors,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();
    
    const onSubmit = (data) => {
        fetch('/?no-cache=1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'Contact Form',
                ...data,
            }),
        })
            .then(() => {})
            .catch((err) => console.error(err));
    };

    return (
        <>
            <Container>
                <h1>Get in touch</h1>
                <p>
                    Wanna talk? Send me an email through the form below or get in touch
                    through my social media profiles.
                </p>

                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    action="/contact/thanks/"
                    method="post"
                    name="Contact Form"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="bot-field" />
                    <Row>
                        <label htmlFor="name">
                            Your Name
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                ref={register({ required: true })}
                            />
                        </label>
                    </Row>
                    {errors.name && <ErrorMessage error={errors.name} />}

                    <Row>
                        <label htmlFor="email">
                            Your Email
                            <input
                                name="email"
                                id="email"
                                required
                                type="email"
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </label>
                    </Row>
                    {errors.email && <ErrorMessage error={errors.email} />}

                    <Row>
                        <label htmlFor="message">
                            Your Message
                            <textarea
                                name="message"
                                ref={register({ required: true })}
                                id="message"
                                required
                            />
                        </label>
                    </Row>
                    {errors.message && <ErrorMessage error={errors.message} />}

                    <Row>
                        <button disabled={isSubmitting} type="submit">
                            Send
                        </button>
                    </Row>
                </Form>
            </Container>
        </>
    );
}




const Form = styled.form`
  label {
    width: 100%;
    font-size: 1.5rem;
  }
  input {
    height: 30px;
    width: 93%;
  }
  textarea {
    height: 90px;
    width: 93%;
  }
  button {
    width: 93%;
    background: #e94e1b;
    color: #fff;
    margin-bottom: 5rem;
  }
  input,
  textarea,
  button {
    border-radius: calc(15px + 0.25rem);
    border: none;
    padding: 0.25rem 1rem;
    font-size: 1.25rem;
    font-family: 'brandon-grotesque', sans-serif;
    display: block;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  width: 500px;
  margin: 1.5rem auto 0;
`;

export default Contact;