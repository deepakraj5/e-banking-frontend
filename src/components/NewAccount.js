import React, { useState } from 'react'
import ClientService from '../services/ClientService'

const NewAccount = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ accNo, setAccNo ] = useState('')
    const [ gender, setGender ] = useState('')
    const [ dob, setDOB ] = useState('')
    const [ phoneNo, setPhoneNo ] = useState('')
    const [ zip, setZip ] = useState('')
    const [ password, setPassword ] = useState('')

    const client = {
        name,
        email,
        accountnumber: parseInt(accNo),
        gender,
        dateofbirth: dob,
        phonenumber: parseInt(phoneNo),
        postalcode: zip,
        password
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await ClientService.newAccount(client)
            if(response.status === 201){
                alert('Account created')
            }
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="container jumbotron shadow bg-white rounded home-bg account-personal">
            <form>
                <div className='form-row'>

                    <div className='col mb-4'>
                        <label>Name</label>
                        <input type='text' placeholder='Name' className='form-control form-control-sm' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='col mb-4'>
                        <label>Email</label>
                        <input type='email' placeholder='Email' className='form-control form-control-sm' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='col mb-4'>
                        <label>Acc Number</label>
                        <input type='number' placeholder='Account Number' className='form-control form-control-sm' value={accNo} onChange={(e) => setAccNo(e.target.value)} />
                    </div>

                    <div className='col mb-4'>
                        <label>Gender</label>
                        <input type='text' placeholder='Gender' className='form-control form-control-sm' value={gender} onChange={(e) => setGender(e.target.value)} />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='col mb-4'>
                        <label>Date of Birth</label>
                        <input type='date' placeholder='Date of Birth' className='form-control form-control-sm' value={dob} onChange={(e) => setDOB(e.target.value)} />
                    </div>

                    <div className='col mb-4'>
                        <label>Phone Number</label>
                        <input type='number' placeholder='Phone Number' className='form-control form-control-sm' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>

                </div>

                <div className='form-row'>

                    <div className='col mb-4'>
                        <label>Zip</label>
                        <input type='number' placeholder='Postal Code' className='form-control form-control-sm' value={zip} onChange={(e) => setZip(e.target.value)} />
                    </div>

                    <div className='col mb-4'>
                        <label>Password</label>
                        <input type='password' placeholder='Password' className='form-control form-control-sm' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                </div>

                <div>
                    <button className='btn btn-sm btn-outline-danger'>Cancel</button>
                    <button className='btn btn-sm btn-outline-success' onClick={handleSubmit}>Signup</button>
                </div>

            </form>
        </div>
    );
}

export default NewAccount