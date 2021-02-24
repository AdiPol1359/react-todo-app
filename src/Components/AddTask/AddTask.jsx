import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

    state = {
        name: '',
        important: false,
        date: ''
    }

    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: value
        })
    }

    handleButtonClick = () => {
        this.setState({
            name: '',
            important: false,
            date: ''
        });

        const { name, date, important } = this.state;

        this.props.click({ name, date, important });
    }

    render() {
        return (
            <div className="add_task">

                <input type='text' value={this.state.name} placeholder='Dodaj zadanie' name='name' onChange={this.handleInputChange}/>
                <label htmlFor='important'>Priorytet</label>
                <input type='checkbox' id='important' name='important' checked={this.state.important} onChange={this.handleInputChange} />

                <br />

                <label htmlFor='date'>Do kiedy zrobić</label>
                <input type='date' id='date' name='date' value={this.state.date} onChange={this.handleInputChange}/>

                <br />

                <button onClick={this.handleButtonClick}>Dodaj</button>
            </div>
        )
    }
}

export default AddTask;