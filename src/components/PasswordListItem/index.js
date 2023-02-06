/* eslint-disable react/no-unknown-property */
import './index.css'

const PasswordListItem = props => {
  const {details, showPassword, onDelete} = props
  const {id, websiteName, username, password, initialClassName} = details

  const onDeleteList = () => {
    onDelete(id)
  }

  return (
    <li className="password-list-container">
      <div className={`name-icon ${initialClassName}`}>
        <p className="initial ">{websiteName[0].toUpperCase()}</p>
      </div>
      <div className="password-details-container">
        <p className="password-title">{websiteName}</p>
        <p className="password-title">{username}</p>

        {showPassword ? (
          <p className="password-title">{password} </p>
        ) : (
          <img
            className="star"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={onDeleteList}
        testid="delete"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordListItem
