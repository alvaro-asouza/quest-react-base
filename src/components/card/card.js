import React from "react"

class ParagrafoM extends React.Component {
    render() {
        return (
            <div >
                <p style={{ color: this.props.color }}>{this.props.text.toUpperCase()}</p>
            </div>
        )
    }
    
}

ParagrafoM.defaultProps = {
    color: 'red',
    text: 'Esse é um texto com letras maiúsculas'
}

export default ParagrafoM