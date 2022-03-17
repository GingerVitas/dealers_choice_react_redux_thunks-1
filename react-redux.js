import React, {Component} from "react";
import store from './store';


class AddInventory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
        this.handleAddition = this.handleAddition.bind(this);
    }
    handleAddition(evt) {
        if (evt.key === "Enter"){
            this.props.add(this.state.input);
            this.setState({ input: ""})
        }
    }
    render(){
        return (
            <div className="Inventory">
                <input type='text' value={this.state.input}>
                </input>
                <button>Add to Tracker</button>
            </div>
        )
    }
}

export default AddInventory