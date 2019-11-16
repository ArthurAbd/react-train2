import React from 'react';

import './CountryInfo.css';

export default () => {
    return (
        <div className='country-info col-8'>
            <div className='bg-dark p-3 my-2 border-def'>
                        <h2 className="bg-dark">Название</h2>
                        <ul className="list-group list-group-flush list-fix">
                            <li className="list-group-item bg-dark">Площадь: 1</li>
                            <li className="list-group-item bg-dark">Граничит с </li>
                            <li className="list-group-item bg-dark">Столица:</li>
                            <li className="list-group-item bg-dark">Расположена на 'материке'</li>
                            <li className="list-group-item bg-dark">Языки:</li>
                            <li className="list-group-item bg-dark">Таймзоны</li>
                        </ul>
                        <h2 className="bg-dark my-3">Флаг</h2>
                        <img src="https://restcountries.eu/data/geo.svg" className="bg-dark px-5 img-fluid" alt="Responsive"/>
            </div>
        </div>
    )
}

// название
// площадь
// граничит
// столица
// материк
// языки
// численность
// таймзон
// флаг