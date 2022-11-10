import { Component } from "react";
import "./index.css";

export default class UserDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      city: "",

      users: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { name, email, phone, city } = this.state;
    if (name && email && phone && city) {
      this.setState({
        users: [...this.state.users, { name, email, phone, city }]
      });
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <h1 className="heading">User Details Form</h1>
          <form onSubmit={this.handleFormSubmit} className="user-details-form">
            <input
              required
              onChange={this.handleInputChange}
              name="name"
              className="form-text-input"
              placeholder="Name"
            />
            <input
              required
              onChange={this.handleInputChange}
              name="email"
              className="form-text-input"
              placeholder="Email"
              type="email"
            />
            <input
              required
              onChange={this.handleInputChange}
              name="phone"
              className="form-text-input"
              placeholder="Phone"
              type="tel"
            />
            <input
              required
              onChange={this.handleInputChange}
              name="city"
              className="form-text-input"
              placeholder="City"
            />
            <button className="form-submit-button" type="submit">
              Submit
            </button>
          </form>

          <h1 className="heading">Users:</h1>
          <table className="users-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
