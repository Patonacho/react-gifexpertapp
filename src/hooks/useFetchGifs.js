import { useState, useEffect } from "react"
import { getGifts } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category)
            .then(imgs => {

                setstate({
                    data: imgs,
                    loading: false
                });

            })

    }, [category])

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5,6],
    //         loading: false
    //     })

    // }, 3000);

    return state;

}