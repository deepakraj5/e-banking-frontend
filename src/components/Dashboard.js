import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie'
import { Button } from '@material-ui/core'
import avatar from '../images/avatar.png'
import AccountDetails from './AccountDetails'
import ClientService from '../services/ClientService'

const Dashboard = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDOB] = useState('')
    const [gender, setGender] = useState('')
    const [accountNumber, setAccountNumber] = useState('')

    useEffect(() => {
        // const clientDetails = JSON.parse(localStorage.getItem('clientDetails'))

        ClientService.profileDetails().then((res) => {
          setName(res.data.name)
          setEmail(res.data.email)
          setDOB(res.data.dateofbirth.slice(0, 10))
          setGender(res.data.gender.toUpperCase())
	  setAccountNumber(res.data.accountnumber)
        }).catch((error) => {
          console.log(error)
        })
    })

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.removeItem('clientDetails')
        const cookie = new Cookies()
        cookie.remove('jwt', { path: '/' })
        props.handleDashboard()
    }

  return (
    // <div className='jumbotron container shadow rounded bg-white'>
    //     <h4>Dashboard</h4>
    // </div>

    <div
      className="profile container jumbotron"
      style={{ backgroundColor: "transparent" }}
    >

      <div className="row">
        <div className="col-lg-4 user-details">
          <div className="card shadow rounded">
          <img className="card-img-top" src={avatar} alt="avatar" />
            <div className="card-body">
              <table cellPadding="8">
                  <thead>
                    <tr>
                        <td className="uhead">Name</td>
                        <td className="udetails">{name}</td>
                    </tr>
			
		    <tr>
                        <td className="uhead">Account Number</td>
                        <td className="udetails">{accountNumber}</td>
                    </tr>

                    <tr>
                        <td className="uhead">Email</td>
                        <td className="udetails">{email}</td>
                    </tr>

                    <tr>
                        <td className="uhead">Date of Birth</td>
                        <td className="udetails">{dob}</td>
                    </tr>

                    <tr>
                        <td className="uhead">Gender</td>
                        <td className="udetails">{gender}</td>
                    </tr>

                  </thead>
              </table>
            </div>
          </div>
        </div>

      <div className="col-lg-8 accdetails">
        <div className="card">
          <div className="card-body">
            <h4 className="card-header bg-white logout">
              Account Details
              <Button variant='contained' color='secondary' size='small' onClick={handleLogout}>Logout</Button>
            </h4>
            <AccountDetails />
          </div>
        </div>
      </div>

      </div>

    </div>
  );
};

export default Dashboard;
