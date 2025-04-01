import {useContactForm} from '../hooks/useContactForm.ts';

const ContactForm: React.FC = () => {
  const {
    name,
    email,
    message,
    validEmail,
    submitted,
    setName,
    setEmail,
    setMessage,
    handleSubmit
  } = useContactForm()

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