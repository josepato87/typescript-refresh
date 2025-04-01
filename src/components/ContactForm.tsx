import { useEffect, useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValidEmail(isValidEmail || email === '');
  }, [email]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || !validEmail) {
      alert('Please fill out all fields');
      return;
    }
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'inline-block', textAlign: 'left'}}>
      <div>
        <label>Name: </label>
        <input value={name} onChange={e => setName(e.target.value)} required/>
      </div>
      <div>
        <label>Email: </label>
        <input value={email} onChange={e => setEmail(e.target.value)} required/>
        {!validEmail && <p style={{color: 'red'}}>Invalid email format</p>}
      </div>
      <div>
        <label>Message: </label>
        <textarea value={message} onChange={e => setMessage(e.target.value)}/>
      </div>
      <button type='submit'>Submit</button>

      {submitted && <p style={{color: 'green'}}>Thank you for contacting us, {name}!</p>}
    </form>
  );
};

export default ContactForm;