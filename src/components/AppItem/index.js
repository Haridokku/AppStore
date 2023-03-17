
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="head">{appName}</p>
    </li>
  )
}
export default AppItem
