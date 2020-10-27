import React from "react";
// import ClientService from '../services/ClientService'
import axios from 'axios'

class NewRegisterForm extends React.Component{

    state = {
        firstName : '',
        lastName : '',
        age : '',
        selectedFile : null
    }

    handleFirstName = (e) => {
        this.setState({ firstName : e.target.value })
    }

    handleLastName = (e) => {
        this.setState({ lastName : e.target.value })
    }

    handleAge = (e) => {
        this.setState({ age : e.target.value })
    }

    handleOnFile = (e) => {
        this.setState({ selectedFile : e.target.files[0] })
    }

    handleOnSubmit = (e) => {

        e.preventDefault()

        const formData = new FormData()
        formData.append(
            "imageFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        )

        formData.append("firstName" ,this.state.firstName)
        formData.append("lastName", this.state.lastName)
        formData.append("age", this.state.age)

        // console.log(this.state.selectedFile)

        axios.post('http://localhost:8080/api/v1/clients', formData).then((res) => {
            if(res.status === 200){
                this.props.history.push('/profile')
                console.log('Form submited successfully')
            }else{
                console.log('Form submission unsuccessfull')
            }
        })
    }

    onCancel = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="container jumbotron shadow bg-white rounded">
                <h1>Register Form</h1>

                <form>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" onChange={this.handleFirstName} />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" onChange={this.handleLastName} />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Age</label>
                            <input type="number" className="form-control" placeholder="Age" onChange={this.handleAge} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label>Profile Image</label>
                            <input type="file" className="form-control" onChange={this.handleOnFile} />
                        </div>
                    </div>

                    <button className="btn btn-success" onClick={this.handleOnSubmit}>Submit</button>
                    <button className="btn btn-danger" onClick={this.onCancel} >Cancel</button>
                </form>
            </div>
        );
    }
}

export default NewRegisterForm;
