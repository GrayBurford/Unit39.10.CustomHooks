import React, {useState} from 'react';
import axios from 'axios';


function useFlip (defaultState = true) {
    const [flip, setFlip] = useState(defaultState);

    function toggleFlip () {
        setFlip(flip => !flip);
    }

    return [flip, toggleFlip];
}

function useAxios (url) {
    const [cardData, setCardData] = useState([]);

    async function addCardData () {
        const res = await axios.get(url);
        setCardData(cardData => [...cardData, {...res.data}])
    }

    return [cardData, addCardData]
    
}

export { useFlip, useAxios };