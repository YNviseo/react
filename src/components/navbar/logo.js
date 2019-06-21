import React from 'react'

export default class Logo extends React.Component {
    render() {
        return   <img alt="Logo" src={require('../../logo.png')} />
    }
}