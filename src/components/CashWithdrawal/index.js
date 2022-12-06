import './index.css'
import {Component} from 'react'
import DenominationItems from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="profile-container">
            <div className="profile">
              <p className="profile-logo">{initial}</p>
            </div>
            <p className="profile-name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="balance-count">{balance}</p>
              <p className="balance-currency">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-sum-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(each => (
              <DenominationItems
                denominationDetails={each}
                key={each.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
