import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { Button } from './ui/button';

function ContactForm({ comingsoon }: { comingsoon?: boolean }) {
    const [email, setEmail] = useState('');
    const [state, handleSubmit] = useForm("mdkozaow");

    if (state.succeeded) {
        return (
            <p className="mb-8 text-green-500">
                Thanks! We'll notify you when we launch.
            </p>
        )
    }
    return (
        <form onSubmit={handleSubmit} className='mb-8'>
            <div className="flex gap-2 max-w-sm mx-auto">
                <div className='flex gap-4 flex-col'>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="
                                flex-1
                                px-4 py-2.5
                                border border-gray-300
                                rounded-md
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                "
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    {!comingsoon && <textarea
                        id="message"
                        name="message"
                        placeholder='Message'
                        className="
                                flex-1
                                px-4 py-2.5
                                border border-gray-300
                                rounded-md
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                "
                    />}
                </div>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <Button type='submit' className="
                      px-6 py-2.5
                      bg-blue-600
                      text-white
                      rounded-md
                      hover:bg-blue-700
                      transition-colors">Notify Me</Button>
            </div>
        </form>
    );
}

export default ContactForm;

//     <form onSubmit={handleSubmit} className="mb-8">
//         <div className="flex gap-2 max-w-sm mx-auto">
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="
//   flex-1
//   px-4 py-2.5
//   border border-gray-300
//   rounded-md
//   focus:outline-none focus:ring-2 focus:ring-blue-500
// "
//                 required
//             />
//             <button
//                 type="submit"
//                 className="
//   px-6 py-2.5
//   bg-blue-600
//   text-white
//   rounded-md
//   hover:bg-blue-700
//   transition-colors
// "
//             >
//                 Notify Me
//             </button>
//         </div>
//     </form>
