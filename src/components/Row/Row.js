import React from 'react'

const Row = ({left, right}) => {
    return (
        <div className="row">
            <div className='col-4'>
                <div className='bg-dark p-3 my-2 border-def'>
                    {left}
                </div>
            </div>
            <div className='col-8'>
                <div className='bg-dark p-3 my-2 border-def'>
                    {right}
                </div>
            </div>
        </div>
    )
}

export default Row