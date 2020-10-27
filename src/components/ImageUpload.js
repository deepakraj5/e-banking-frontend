import React from "react";
import axios from 'axios'

class ImageUpload extends React.Component {
  state = {
    selectedFile : null,
    imageName : '',
    image : null
  };

  onFileChange = event => { 
    this.setState({ selectedFile: event.target.files[0] });    
  }; 
   
  onFileUpload = () => { 
    const formData = new FormData(); 
    formData.append( 
      "imageFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
    console.log(this.state.selectedFile); 
    axios.post("http://localhost:8080/api/v1/personal", formData).then((res) => {
        if(res.status === 200){
            console.log('Image uploaded successfully')
        }else {
            console.log('Image upload failed')
        }
    }) 
  }; 

  onImageName = (e) => {
      this.setState({ imageName : e.target.value })
  }

  onRetriveImage = () => {
      const imageName = this.state.imageName
      axios.get("http://localhost:8080/api/v1/personal/" + imageName).then((res) => {
         
          this.setState({ image : res.data.picByte })

      })
  }

  render() {
    return (
      <div className="container jumbotron shadow bg-white rounded">
        <h4 className="text-center">Image upload</h4>
        <div>
            <input type="file" onChange={this.onFileChange} />
            <button onClick={this.onFileUpload}>Upload</button>
        </div>   
        <div>
            <input type="text" placeholder="imagename" onChange={this.onImageName} />
            <button onClick={this.onRetriveImage}>Get Image</button>
        </div>
        <div>
            <img src={`data:image/jpeg;base64,${this.state.image}`} width="120px" height="120px" alt="profile" />
        </div>
      </div>
    );
  }
}

export default ImageUpload;
