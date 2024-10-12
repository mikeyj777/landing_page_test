import React, { useState } from 'react';
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from '../components/CustomComponents';
import { Check, Mail, User } from 'lucide-react';

const EmailCaptureLandingPage = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="landing-page">
      <Card className="form-container">
        <CardHeader>
          <CardTitle>Join Our Community</CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <>
              <p className="text-center mb-6">
                Get exclusive tips, updates, and offers delivered straight to your inbox!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="firstName" className="block mb-1">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="input-icon" size={18} />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input input-with-icon"
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="input-icon" size={18} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input input-with-icon"
                      required
                    />
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <Button type="submit" className="button button-primary w-full">
                  Subscribe Now
                </Button>
              </form>
              <p className="privacy-text">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <div className="success-message">
              <Check className="success-icon" />
              <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
                {/* <p>
                  We've sent a confirmation email to {email}. Please check your inbox to complete the subscription process.
                </p> */}
            </div>
          )}
        </CardContent>
      </Card>
      
      <footer className="footer">
        © 2024 YourBrand. All rights reserved.
      </footer>
    </div>
  );
};

export default EmailCaptureLandingPage;