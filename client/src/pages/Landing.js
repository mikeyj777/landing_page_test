import React, { useState } from 'react';
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from '../components/CustomComponents';
import { Check, Mail, User } from 'lucide-react';

const EmailCaptureLandingPage = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { firstName, email });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col justify-center items-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-800">
            Join Our Community
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <>
              <p className="text-center text-gray-600 mb-6">
                Get exclusive tips, updates, and offers delivered straight to your inbox!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Subscribe Now
                </Button>
              </form>
              <p className="text-xs text-center text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <div className="text-center">
              <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-600">
                We've sent a confirmation email to {email}. Please check your inbox to complete the subscription process.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        © 2024 YourBrand. All rights reserved.
      </footer>
    </div>
  );
};

export default EmailCaptureLandingPage;