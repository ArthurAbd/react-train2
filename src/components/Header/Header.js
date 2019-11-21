import React from 'react';
import {Link} from 'react-router-dom'

import './Header.css';

export default () => {
    return (
        <div className="header d-flex justify-content-center
                        p-2 my-3 bg-dark border-def btn-group">
            <Link to="/" className="btn btn-dark">
                Главная
            </Link>
            <Link to="/country/" className="btn btn-dark">
                Страны
            </Link>
        </div>
    )
}
