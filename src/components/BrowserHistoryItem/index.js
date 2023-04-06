import './index.css'

const BrowserHistoryItem = props => {
  const {HistoryDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <div className="browser-start">
        <p className="history-time">{timeAccessed}</p>
        <div className="browser-middle">
          <img src={logoUrl} className="history-image" alt="domain logo" />
          <p className="history-title">
            {title}
            <span className="space">__</span>
          </p>
          <p className="history-url"> {domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          // eslint-disable-next-line react/no-unknown-property
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
