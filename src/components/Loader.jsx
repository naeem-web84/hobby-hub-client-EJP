import React from 'react';

const Loader = () => {
    return (
        <div  className="flex justify-center items-center h-screen">

            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Loader;