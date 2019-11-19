import React from 'react'
import PropTypes from 'prop-types'

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

Row.propTypes = {
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired
}

export default Row