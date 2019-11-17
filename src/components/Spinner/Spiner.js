import React from 'react';

export default () => {
    return (
        <div className="d-flex justify-content-center bg-dark">
            <div className="spinner-border text-light bg-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}