import React, { useState } from 'react';

const Form = () => {
    const [issue, setIssue] = useState({
        username: '',
        problem: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setIssue({
            ...issue,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(issue); // For example, log the state
    }

    return (
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded p-6">
            <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-md mb-4">
                <h1 className="text-lg font-bold">Report Problem</h1>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    name="username"
                    placeholder='Fullname'
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    name="email"
                    placeholder='Email'
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    name="phone"
                    placeholder='Phone'
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    name="problem"
                    cols="30"
                    rows="10"
                    placeholder='Problem Description'
                    onChange={handleChange}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
