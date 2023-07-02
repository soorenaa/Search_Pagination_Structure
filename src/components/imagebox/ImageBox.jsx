import './imagebox.css';
import des from '../../assets/images/des.jpg';
import { useEffect, useState } from 'react';
import { getAllImagePosts } from '../../api/services';
import Card from './Card';

const ImageBox = () => {

    // Api Call
    const [data, setData] = useState([]);
    useEffect(() => {
       getAllImagePosts().then((result) => {
            setData(result.data)
        });
    }, [])
    console.log(data);
    return (
        <div id='card_box'>

            {/* show Data */}
            {data.map((data) => (
            <Card key={data.id} data={data}/>
            ))}

        </div>
    )
}

export default ImageBox;