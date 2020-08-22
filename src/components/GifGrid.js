import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifts } from '../helpers/GetGifs';

export const GifGrid = ({ category }) => {

    // const [count, setcount] = useState(0);
   const {data:images,loading} =  useFetchGifs( category );

    // const [images, setimages] = useState([]);

    // useEffect(() => {
    //     getGifts(category)
    //         .then(setimages)
    // }, [ category]) 

    //getGifts();
    return (
        <>
            <h3  className="card-grid animate__animated animate__fadeIn"> {category} </h3>
            {loading && <p  className="card-grid animate__animated animate__zoomIn ">Loading ...</p>}
            <div className="card-grid animate__animated animate__fadeIn">

                {images.map((img) =>
                    <GifGridItem
                        key={img.id}
                        {...img} />
                )}


            </div>
        </>
    )
}
