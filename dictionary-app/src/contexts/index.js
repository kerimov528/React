import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

export const WordContext = React.createContext();

const WordContextProvider = (props) => {

    const [words, setWords] = useState([])
    const [favourite, setFavourite] = useState([])
    const [revise, setRevise] = useState([])
    const [learned, setLearned] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get('http://localhost:3000/words');
            setWords(response.data.sort(() => Math.random() - 0.5));
        }
        getMovies();
    }, [])

    
    return (
        <WordContext.Provider value={{ words }}>
            {props.children}
        </WordContext.Provider>
    )
}

export default WordContextProvider
