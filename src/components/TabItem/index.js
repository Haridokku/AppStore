import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onChangeTabItem = () => {
    changeTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={onChangeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
