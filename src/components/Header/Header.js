import React from 'react';

import './Header.css';

export default () => {
    return (
        <div className="header d-flex justify-content-center
                        p-2 my-3 bg-dark border-def btn-group">
            <button className="btn btn-dark">Страны</button>
            <button className="btn btn-dark">Континенты</button>
            <button className="btn btn-dark">Экономические союзы</button>
        </div>
    )
}
