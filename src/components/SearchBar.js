import React, { Component } from 'react';


class SearchBar extends Component {

    handleChange = (e) => {
        this.props.addTask(e);
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.pushTask();
    }

    render() {
        return (
            <form className="col s12" onSubmit={this.handleClick}>
                <div className="row">
                    <div className="input-field col s10">
                        <input onChange={this.handleChange} value={this.props.presentTask} id="first_name2" type="text" />
                        <label className="active" htmlFor="first_name2">First Name</label>
                    </div>
                    <a onClick={this.handleClick} className="col s2 waves-effect waves-light btn-small">Add task</a>
                </div>
            </form>
        )
    }
}

export default SearchBar;