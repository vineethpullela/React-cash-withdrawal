import './index.css'

const DenominationItems = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onChangeBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="button-items">
      <button type="button" className="button" onClick={onChangeBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItems
