import React, { useState } from 'react';
import axios from 'axios'; 
import './styles.css';

const ItemImage = (props) => {
    // const [image, setImage] = useState('');
    // const [loading, setLoading] = useState(true);

    // const uploadImage = (e) => {
    //     const files = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('upload_preset', 'sharemasters');
    //     formData.append('file', files);
    //     console.log(files);
    //     console.log(formData);

    // axios.post('https://api.cloudinary.com/v1_1/djz8ibfox/image/upload', formData)
    // .then(res => {
    //     console.log(res.data);
    //     setImage(res.data.secure_url)
    // })
    // // .then(res => )
    // // .then(setLoading(false))
    // .catch(err => console.log(err));
    // }

    return(
        <div className='item-img-div'>
            {!props.image ? <> <input name="file" type="file" className="file-upload" data-cloudinary-field="image_id" data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}" onChange={props.uploadImage}/>
            <div className='placeholder-div'><h1>Upload an image</h1></div> 
            </>
            : <img className='item-img' src={props.image} />}
        </div>
    )
}

export default ItemImage;