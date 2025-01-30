import React, { useState } from "react";
import { db } from '@/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewWaitlistForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  //   const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add the email to the Firestore "waitlist" collection
      await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: serverTimestamp(),
      });

      toast({
        title: "Success!",
        description:
          "You've been added to the waitlist. We'll notify you when we launch!",
      });
      setEmail("");

    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Error",
        description: "Error submitting your email. Please try again later",
      });

      console.error("Error adding document: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6" id="waitlist">
      <form onSubmit={handleSubmit} className="rounded-lg p-6 space-y-6">
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
            placeholder="contact@nouvells.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </form>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
};

export default NewWaitlistForm;
