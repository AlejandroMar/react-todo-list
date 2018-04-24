import React, { Component } from 'react';


class SearchBar extends Component {

    handleChange = (e) => {
        this.props.addTaskToState(e);
    }

    handleClick = () => {
        this.props.pushTaksToTaskArray();
    }
    render(){
        return (
            <div className="row">
                <div className="input-field col s6">
                    <input onChange={this.handleChange}  id="first_name2" type="text"/>
                    <label className="active" htmlFor="first_name2">First Name</label>
                </div>
                <a onClick={this.handleClick} className="col s1 waves-effect waves-light btn-small">Button</a>
            </div>
        )
    }
}

export default SearchBar;