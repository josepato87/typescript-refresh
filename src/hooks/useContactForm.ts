import { useEffect, useState } from 'react';

export const useContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValidEmail(isValid || email === '');
  }, [email]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email || !validEmail) {
      alert('Please fix validation errors before submitting.');
      return;
    }
    setSubmitted(true);
  };

  return {
    name,
    email,
    message,
    validEmail,
    submitted,
    setName,
    setEmail,
    setMessage,
    handleSubmit,
  };
};