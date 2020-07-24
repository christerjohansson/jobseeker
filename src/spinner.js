import React, { Component } from 'react'

export default class spinner extends Component {
    render() {
        return (
            <div>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}
