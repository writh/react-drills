import React, {Component} from 'react';

class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            input: ''
        };

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleInputChange(value){
        this.setState({ input: value })
    }

    handleAddTask(e) {
        e.preventDefault();
        this.props.add(this.state.input);
        this.setState({input:''});
    }
    render() {
        return(
            <div>
                <form>
                <input value={this.state.input} onChange={(e) => this.handleInputChange(e.target.value)} placeholder="Enter new task"/>
                <button onClick={this.handleAddTask}>Add</button>
                </form>
            </div>
        )
    }
}
export default NewTask;