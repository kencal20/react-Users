import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      location: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);

    this.setState({
      name: "",
      phoneNumber: "",
      location: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Contact</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            className="inputField"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            className="inputField"
            type="number"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="locaton">Location: </label>
          <input
            className="inputField"
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button className="submit">Add Contact</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchtoProps = {
  addNewUser: addUser,
};
export default connect(mapStateToProps, mapDispatchtoProps)(Form);
