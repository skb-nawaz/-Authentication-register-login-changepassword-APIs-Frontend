import {Component} from 'react'

class Register extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    gender: '',
    location: '',
    showErrorMessage: 'false',
    errorMsg: '',
  }

  onChangeGenderValue = event => {
    this.setState({gender: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderNameField = () => {
    const {name} = this.state
    return (
      <>
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="password-input-filed"
          value={name}
          onChange={this.onChangeName}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderLocationField = () => {
    const {location} = this.state
    return (
      <>
        <label className="input-label" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="username-input-filed"
          value={location}
          onChange={this.onChangeLocation}
        />
      </>
    )
  }

  renderGenderField = () => {
    const {gender} = this.state
    return (
      <>
        <label className="input-label" htmlFor="gender">
          GENDER
        </label>
        let gender
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={this.onChangeGenderValue}
        >
          <option value="">--Please choose an option--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </>
    )
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password, name, gender, location} = this.state
    const userDetails = {
      username,
      password,
      name,
      gender,
      location,
    }
    const url = 'https://auth-ruv9.onrender.com/register'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Register</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderGenderField()}</div>
          <div className="input-container">{this.renderLocationField()}</div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    )
  }
}

export default Register
