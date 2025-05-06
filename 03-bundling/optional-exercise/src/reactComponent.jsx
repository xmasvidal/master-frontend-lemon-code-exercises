import React from 'react';

export const MyComponent = () => {
    console.log(`Api base: ${process.env.API_BASE}`);
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>This is a React component.</p>
            <p>Api base: ${process.env.API_BASE}</p>
        </div>
    );
};