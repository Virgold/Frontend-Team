import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 py-12">
            <div className="text-center max-w-md mx-auto">
                <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>

                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-8">
                    Sorry, we couldn't find the page you're looking for. It might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>

                <div className="space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="
              px-6 py-2.5 
              text-blue-600 
              border border-blue-600 
              rounded-md
              hover:bg-blue-50
              transition-colors
            "
                    >
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="
              px-6 py-2.5 
              bg-blue-600 
              text-white 
              rounded-md
              hover:bg-blue-700
              transition-colors
            "
                    >
                        Go Home
                    </button>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    Need help?{' '}
                    <a
                        href="/contact"
                        className="text-blue-600 hover:underline"
                    >
                        Contact our support team
                    </a>
                </p>
            </div>
        </div>
    );
};

export default NotFound;
