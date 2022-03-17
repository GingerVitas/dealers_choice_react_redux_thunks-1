import React, {Component} from 'react';
import {render} from 'react-dom';
import store from '../store';
import {connect, Provider} from 'react-redux'
import { addItems } from "../store";
const LIST_ITEMS = 'LIST_ITEMS'


const mapDispatchtoProps = (dispatch) =>{
    return {
        loadItems: () => {
            dispatch(loadItems())
        }
    }
}

class _App extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    async componentDidMount(){
        const addItems = this.props
        addItems();
    }
    render(){
        return (
            <div className="Inventory">
                <h1>Acme Inventory Management</h1>
                <input type='text' value={this.state.input}>
                </input>
                <button className="item">Add to Tracker</button>
            </div>
        )
    }
}

const App = connect(null, mapDispatchtoProps)(_App);


render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
