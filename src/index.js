import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-600">Hello Wolrd</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
