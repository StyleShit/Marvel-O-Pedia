import React from 'react';
import './Loader.css';

function Loader({ loaderRef })
{
    return (
        <div className="loader" ref={ loaderRef }></div>
    )
}

export default Loader;