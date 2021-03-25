import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return (
        <button className='btn' style={{backgroundColor: props.color}}>
            {props.text}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string, 
    text: PropTypes.string.isRequired
}

export default Button
