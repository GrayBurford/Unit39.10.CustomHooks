import React, {useState} from 'react';
import axios from 'axios';
import { v4 as uuid } from "uuid";


function useFlip (defaultState = true) {
    const [flip, setFlip] = useState(defaultState);

    function toggleFlip () {
        setFlip(flip => !flip);
    }

    return [flip, toggleFlip];
}

function useAxios (url) {
    const [cardData, setCardData] = useState([]);

    async function addCardData (name) {
        console.log('url:', url);
        url = url.indexOf('pokemon') === -1 ? url : `${url}${name}`
        // url = name ? `${url}${name}` : url;
        console.log('url:', url);


        const res = await axios.get(url);
        console.log('res.data:', res.data);

        setCardData(cardData => [...cardData, {...res.data, id : uuid() } ])
    }

    return [cardData, addCardData]
    
}

export { useFlip, useAxios };