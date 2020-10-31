import React from 'react'
import ClientService from '../services/ClientService'
import authCheckService from '../services/authCheckService'

class ViewTransaction extends React.Component {

    state = {
        creditTransactions: [],
        debitTransactions: []
    }

    componentDidMount() {
        if(!authCheckService()) {
            this.props.history.push('/')
        }

        ClientService.viewTransaction().then((res) => {
            this.setState({
                creditTransactions: res.data.creditStatements,
                debitTransactions: res.data.debitStatements
            })
        })
    }

    render(){
        return(
            <div className='jumbotron container shadow rounded table-responsive'>
                <h4>Transactions</h4>

                <table className='table'>

                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Transaction Date</th>
                            <th>Credit/Debit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.debitTransactions.map(transaction =>
                            <tr key={transaction._id}>
                                <td>{transaction._id}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.createdAt}</td>
                                <td>Debit</td>
                            </tr>
                            )
                        }

                        {
                            this.state.creditTransactions.map(transaction =>
                                <tr key={transaction._id}>
                                    <td>{transaction._id}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.createdAt}</td>
                                    <td>Credit</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewTransaction