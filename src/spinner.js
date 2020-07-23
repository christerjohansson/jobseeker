import React, { Component } from 'react'

export default class spinner extends Component {
    render() {
        return (
            <div>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}
