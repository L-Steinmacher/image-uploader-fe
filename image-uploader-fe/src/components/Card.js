import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const Card = (props) => {
    const { image } = props;
    const url= `http://localhost:2019/users/user/${image.user.id}/image/${image.id}/download`


    const [photo, setPhoto] = useState([])
    useEffect(() => {
      axiosWithAuth().get(`/users/user/${(parseInt(image.user.id))}/image/${parseInt(image.id)}/download`
      , {responseType: "blob"})
      .then(res => {
        let imageUrl = URL.createObjectURL(res.data)

        setPhoto(imageUrl)
      }).catch(err => {
          console.log(err)
      })
    }, [])
    
    return(
        <div>
            <img src={photo} alt={image.name} width="200" />

        </div>
    )
}

export default Card;