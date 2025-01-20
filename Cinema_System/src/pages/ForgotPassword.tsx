import React from 'react';

const CinemaForgotPassword: React.FC = () => {
    return (
        <div>
            <h1>Forgot Password</h1>
            <form>
                <input type='text' placeholder='Email Address' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default CinemaForgotPassword;