import React, { useState } from 'react';
import linkedin from '../assets/linkedin.png';
import ig from '../assets/instagram.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';

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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send your message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection.');
    }
  };

  const closeMessage = () => {
    setSuccess(false);
    setError('');
  };

  return (
    <div className="px-8 bg-trans-2 py-10 max-sm:px-5 flex flex-col items-center justify-center">
      <div className="big-text flex pad-1">
        <span className="pi pad-3"></span>Contact Me
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 p-2 gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field rounded-xl border border-zinc-700 px-5 py-3 outline-0"
              id="fullname"
              placeholder="Fullname"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field rounded-xl border border-zinc-700 px-5 py-3 outline-0"
              id="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>
          <div className="grid grid-cols-1 p-2">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field  rounded-xl border border-zinc-700 px-5 py-3 outline-0"
              id="phone"
              placeholder="Phone Number"
              autoComplete="off"
              required
            />
          </div>
          <div className="grid grid-cols-1 p-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              cols="30"
              rows="10"
              className="input-field rounded-xl border border-zinc-700 px-5 py-3 outline-0"
              placeholder="Leave Message"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3">
            <button type="submit" className="px-10 py-3 bg-yellow-700 hover:bg-yellow-800 cursor-pointer rounded-xl font-semibold">
              Send Me
            </button>
            {success && (
              <div className="SentMessage">
                <div className='flex items-center flex-col justify-center gap-5'>
                  <div className="flex items-center flex-col justify-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-22 h-22 cursor-pointer p-3 rounded-full bg-green-600/50"
                      onClick={closeMessage}
                    >
                      <circle cx="12" cy="12" r="10" fill="green" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                    <p>Your Message sent successfully! Thanks for contacting.</p>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      onClick={closeMessage}
                      className="bg-green-600 text-slate-100 rounded-xl px-5 py-3 text-sm font-semibold hover:bg-green-700"
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="ErrorMessage">
                <div className='flex items-center flex-col justify-center gap-5'>
                  <div className="flex items-center flex-col justify-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-22 h-22 cursor-pointer p-3 rounded-full bg-red-600/50"
                      onClick={closeMessage}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <p>{error}</p>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      onClick={closeMessage}
                      className="bg-zinc-900 text-slate-100 cursor-pointer rounded-xl px-5 py-3 text-sm font-semibold hover:bg-zinc-800"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="flex max-sm:grid max-sm:grid-cols-1 items-center justify-center gap-3 p-5">
        <a className="flex items-center justify-center bg-zinc-900 gap-x-2 text-sm rounded-full border border-zinc-700 px-5 py-2" href="mailto:ndangahertier@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 8.25v7.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-7.5m19.5 0A2.25 2.25 0 0019.5 6H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-8.25 5.25m-3-1.91L2.25 8.25"
            />
          </svg>
          ndangahertier@gmail.com
        </a>
        <a className="flex items-center justify-center bg-zinc-900 gap-x-2 text-sm rounded-full border border-zinc-700 px-5 py-2" href="tel:+250786859758">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0-1.242.504-2.437 1.396-3.329A4.68 4.68 0 016.75 2.25h.75c.621 0 1.125.504 1.125 1.125v3c0 .621-.504 1.125-1.125 1.125h-.75a.75.75 0 00-.75.75c0 .621.504 1.125 1.125 1.125h.75c3.105 0 5.625 2.52 5.625 5.625v.75c0 .621-.504 1.125-1.125 1.125h-3a1.125 1.125 0 01-1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125h-.75a.75.75 0 00-.75.75v.75c0 1.242-.504 2.437-1.396 3.329A4.68 4.68 0 012.25 17.25v-.75c0-3.105 2.52-5.625 5.625-5.625h.75c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125h-.75c-3.105 0-5.625-2.52-5.625-5.625v-.75z"
            />
          </svg>
          +250 786859758
        </a>
      </div>
      <div className="flex items-center justify-center pt-2">
        <a className="btn-3 flex" href="https://linkedin.com/in/ndanga-heritier">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a className="btn-3 flex" href="https://x.com/UmuragwaH50768">
          <img src={twitter} alt="Twitter" />
        </a>
        <a className="btn-3 flex" href="https://instagram.com/ndangaheritier">
          <img src={ig} alt="Instagram" />
        </a>
        <a className="btn-3 flex" href="https://facebook.com/ndangaheritier">
          <img src={facebook} alt="Facebook" />
        </a>
        <a className="btn-3 flex" href="https://github.com/NdangaHeritier">
          <img src={github} width={20} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}
