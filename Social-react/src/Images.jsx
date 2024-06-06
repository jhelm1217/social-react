import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./context"
import { getImages } from "./api"
import './App.css'



const Images = () => {
    const [images, setImages] = useState([])
    const { auth } = useContext(AuthContext)


    useEffect(
        () =>{
           if (auth.accessToken) {
            getImages({ auth })
                .then(response => {
                    console.log('GET IMAGESSS: ', response)
                    setImages(response.data)
                })
                .catch(error => console.log('ERROR: ', error))
           } 
        }, 
        [auth.accessToken]
    )



    return (
        <div style= {{ marginTop: 20 }}>
            <hr />
            <h1>Images</h1>
            {images && images.map(image =>  (
                <div key={image.id}>
                    <h4>{image.title}</h4>
                   <img
                   src ={`http://127.0.0.1:8000/${image.image}`} 
                   style= {{ width: '30% '}}
                   />
                   </div>
            )
        )}

        </div>
    )
}

//put alt text on the model in the backend. 

export default Images 