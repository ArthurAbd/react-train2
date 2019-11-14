import React from 'react';

import './ListCountry.css';

export default () => {
    return (
        <div className='list-country col-4'>
            <div className='bg-dark p-2 my-2 border-def'>
                <div></div>
                <ul className="list-group list-group-flush list-fix">
                    <li class="list-group-item bg-dark">Cras justo odio</li>
                    <li class="list-group-item bg-dark">Dapibus ac facilisis in</li>
                    <li class="list-group-item bg-dark">Morbi leo risus</li>
                    <li class="list-group-item bg-dark">Porta ac consectetur ac</li>
                    <li class="list-group-item bg-dark">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    )
}