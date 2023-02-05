import {Component} from 'react'
import {v4} from 'uuid'
import PasswordListItem from '../PasswordListItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [
      {id: 1, websiteName: 'youtube', username: 'saran', password: 'saran123'},
    ],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  addPasswordList = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassList = {
      id: v4(),
      websiteName: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassList],
    }))
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
    } = this.state
    return (
      <div className="bg-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="content-container">
          <div className="add-password-img-container ">
            <img
              className="top-img small"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <img
              className="top-img large"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
            <form
              className="add-new-password-container"
              onSubmit={this.addPasswordList}
            >
              <h1 className="add-new-password-title">Add New Password</h1>
              <div className="input-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.onChangeWebsiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Username"
                  value={usernameInput}
                  onChange={this.onChangeUsernameInput}
                />
              </div>
              <div className="input-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  className="input"
                  placeholder="Enter Password"
                  type="password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <button className="add-btn" type="button">
                Add
              </button>
            </form>
          </div>
          <div className="your-password-container">
            <div className="your-password-title-search-container">
              <div className="your-password-title-container">
                <p>Your Passwords</p>
                <p className="password-count">2</p>
              </div>
              <div className="search-input-container">
                <img
                  className="search-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="line" />
            <div className="show-password-container">
              <input
                className="show-password-checkbox"
                id="showPassword"
                type="checkbox"
              />
              <label htmlFor="showPassword">Show Passwords</label>
            </div>
            <ul>
              {passwordList.map(each => (
                <PasswordListItem key={each.id} details={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
