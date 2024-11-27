import React, { useState } from 'react';
import linkedin from '../assets/linkedin.png';
import ig from '../assets/instagram.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import email from '../assets/email.png';

export default function SocialLinks() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Send POST request to your Node.js backend
          const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
          } else {
            setError('Failed to send your Appointment request! Can you re-try?');
          }
        } catch (error) {
          console.error('Error:', error);
          setError('Error sending email, please check your connection.');
        }    
    };

    const closeMessage = () => {
        setSuccess(false);
        setError('');
    };
    
    return (
        <div className="SocialLinks pad-4">
            <div className="big-text flex pad-1">
                <span className="pi pad-3"></span>Contact Me
            </div>
            <div className="flex">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-1 pad-2">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" id="fullname" placeholder="Fullname" autoComplete="off" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" id="email" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="flex gap-1 pad-2">
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-field input-field-large" id="phone" placeholder="Phone Number" autoComplete="off" />
                    </div>
                    <div className="flex gap-1 pad-2">
                        <textarea name="message" value={formData.message} onChange={handleChange} id="message" cols="30" rows="10" className="input-field input-field-large" placeholder="Leave Message"></textarea>
                    </div>
                    <div className="flex gap-1 pad-2">
                        <button type="submit" className="btn-2">Send Me</button>
                        {success && (
                        <div className="SentMessage">
                            <div className="">
                                <div className="Message pad-3">
                                    Your Message sent successfully! Thanks for contacting.
                                </div>
                                <div className="flex">
                                    <button type="button" onClick={closeMessage} className="btn-1 small-text">Okay</button>
                                </div>
                            </div>
                        </div>
                        )}
                        {error && (
                            <div className="ErrorMessage">
                                <div className="">
                                    <div className="Message pad-3">
                                        <div className="big-text pad-2">❌</div>
                                        {error}
                                    </div>
                                    <div className="flex">
                                        <button type="button" onClick={closeMessage} className="btn-2 small-text">Re-try</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <div className="contact-direct">
                <a className="flex small-text pad-1" href="mailto:ndangahertier@gmail.com">
                    <img src={email} width={20} className="pe-1" /> ndangahertier@gmail.com
                </a>
                <a className="flex small-text pad-1" href="tel:+250786859758">
                    <img src={email} width={20} className="pe-1" /> Call me: 0786859758
                </a>
            </div>
            <div className="flex pt-2">
                <a className="btn-3 flex" href="https://linkedin.com/in/ndanga-heritier">
                    <img src={linkedin} className="" />
                </a>
                <a className="btn-3 flex" href="https://x.com/UmuragwaH50768">
                    <img src={twitter} className="" />
                </a>
                <a className="btn-3 flex" href="https://instagram.com/ndangaheritier">
                    <img src={ig} className="" />
                </a>
                <a className="btn-3 flex" href="https://facebook.com/ndangaheritier">
                    <img src={facebook} className="" />
                </a>
                <a className="btn-3 flex" href="https://github.com/NdangaHeritier">
                    <img src={github} width={20} className="" />
                </a>                
            </div>
        </div>
    );
}
