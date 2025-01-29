import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from './toast';

const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();

    const validateEnvironmentVars = () => {
        const required = [
            'VITE_EMAILJS_SERVICE_ID',
            'VITE_EMAILJS_TEMPLATE_ID',
            'VITE_EMAILJS_PUBLIC_KEY'
        ];

        const missing = required.filter(
            (key) => !import.meta.env[key]
        );

        if (missing.length > 0) {
            throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
        }
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            validateEnvironmentVars();

            if (!form.current) {
                throw new Error('Form reference is not available');
            }

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    to_name: import.meta.env.VITE_EMAILJS_TO_NAME,
                    from_name: form.current.firstName.value + ' ' + form.current.lastName.value,
                    message: form.current.message.value,
                    reply_to: form.current.user_email.value,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );

            toast({
                variant:"default",
                title: "Sent!",
                description: "Message sent successfully! We'll get back to you soon.",
            })

            form.current.reset();

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Failed to send message. Please try again later or contact us directly.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6">

            <form
                ref={form}
                onSubmit={sendEmail}
                className="rounded-lg p-6 space-y-6"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm text-left font-medium text-gray-700 mb-1"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            minLength={2}
                            maxLength={50}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm text-left font-medium text-gray-700 mb-1"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            minLength={2}
                            maxLength={50}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="user_email"
                        className="block text-sm text-left font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                        pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm text-left font-medium text-gray-700 mb-1"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        minLength={10}
                        maxLength={1000}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primay-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending...
                        </>
                    ) : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
