import './index.css'

const PasswordListItem = props => {
  const {details} = props
  const {websitename, username, password} = details

  return (
    <li>
      <div className="name-icon">
        <p>{websitename}</p>
      </div>
    </li>
  )
}

export default PasswordListItem
