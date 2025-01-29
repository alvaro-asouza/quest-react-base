import React from 'react'
import './button.css'

const descLabel = 'Baixar CV'
const labelmsg = () => {
    alert(`A label desse botão é: ${descLabel}`)
}

class Button extends React.Component {
    render() {
        return <button className='btn' onClick={labelmsg}>{this.props.label}</button>
    }
}

Button.defaultProps = {
    label: descLabel
}

export default Button