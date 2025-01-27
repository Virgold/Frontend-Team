import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JoinWaitlistForm = () => {
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

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            toast({
                title: "Success!",
                description: "You've been added to the waitlist. We'll notify you when we launch!",
            });

            form.current.reset();

        } catch (_) {
            toast({
                title: "Error",
                description: "Failed to join the waitlist. Please try again later.",
            });
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
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Joining...
                        </>
                    ) : 'Join Waitlist'}
                </button>
            </form>
        </div>
    );
};

export default JoinWaitlistForm;
