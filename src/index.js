import React, {Component} from 'react';
import {render} from 'react-dom';
import AddInventory from '../react-redux';


class Temp extends Component{
    render(){
        return (
            <div>
                <h1>Website Coming Soon</h1>
            </div>
        )
    }
}


render(<AddInventory />, document.getElementById('root'));
