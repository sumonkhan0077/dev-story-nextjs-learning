import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <h1 className='text-4xl text-center bg-black text-white font-bold'>{children}</h1>
        </div>
    );
};

export default Title;