import {Component} from 'react'
import {v4} from 'uuid'
import PasswordListItem from '../PasswordListItem'
import './index.css'

const colorList = [
  'orange',
  'red',
  'green',
  'blue',
  'voilet',
  'yellow',
  'yellow-green',
  'grey',
]

class PasswordManager extends Component {
  state = {
    passwordList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    isShowPasswordActive: false,
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showPasswordCheckbox = () => {
    this.setState(prevState => ({
      isShowPasswordActive: !prevState.isShowPasswordActive,
    }))
  }

  onDeleteItem = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(each => each.id !== id),
    }))
  }

  addPasswordList = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const initialBgColor =
      colorList[Math.floor(Math.random() * colorList.length)]

    const newPassList = {
      id: v4(),
      websiteName: websiteInput,
      username: usernameInput,
      password: passwordInput,
      initialClassName: initialBgColor,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassList],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  getFilteredList = () => {
    const {searchInput, passwordList} = this.state
    const newList = passwordList.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return newList
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
      isShowPasswordActive,
      searchInput,
    } = this.state
    const filteredList = this.getFilteredList()

    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
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
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="your-password-container">
            <div className="your-password-title-search-container">
              <div className="your-password-title-container">
                <h1 className="your-password-title">Your Passwords</h1>
                <p className="password-count">{passwordList.length}</p>
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
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="show-password-container">
              <input
                className="show-password-checkbox"
                id="showPassword"
                type="checkbox"
                onClick={this.showPasswordCheckbox}
              />
              <label htmlFor="showPassword">Show Passwords</label>
            </div>
            {filteredList.length === 0 ? (
              <div className="no-password-img-container">
                <img
                  className="no-password-img"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p className="no-passwords-text">No Passwords</p>
              </div>
            ) : (
              <ul className="password-lists-container">
                {filteredList.map(each => (
                  <PasswordListItem
                    key={each.id}
                    details={each}
                    showPassword={isShowPasswordActive}
                    onDelete={this.onDeleteItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
