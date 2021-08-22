import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ClientService from '../services/ClientService'

const AccountDetails = (props) => {

    const [balance, setBalance] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [postalCode, setPostalCode] = useState('')

    const history = useHistory()

    const handleFundTransfer = (e) => { 
        history.push('/transfer')
    }

    const handleViewTransaction = (e) => {
        history.push('/viewtransaction')
    }

    useEffect(() => {
        // const clientDetails = JSON.parse(localStorage.getItem('clientDetails'))

        ClientService.profileDetails().then((res) => {
            setBalance(res.data.balance)
            setCreatedAt(res.data.createdAt.slice(0, 10))
            setPhoneNumber(res.data.phonenumber)
            setPostalCode(res.data.postalcode)
        }).catch((error) => {
            console.log(error)
        })
    })

    return(
        <div>

            <div className='balance'>
                <p>&#x20B9; {balance}</p>
                <h6>Available Balance</h6>
            </div>

            <div className='transfer'>
                <Button color='primary' variant='contained' style={{marginRight: '10px'}} onClick={handleViewTransaction}>View Statement</Button>
                <Button color='primary' variant='contained' onClick={handleFundTransfer}>Fund Transfer</Button>
            </div>

            <div className='acc-details'>
                <p>Account Created At : {createdAt}</p>
                <p>Phone Number : {phoneNumber}</p>
                <p>Postal Code : {postalCode}</p>
            </div>

        </div>
    );
}

export default AccountDetails