import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, seterrorMessage] = useState('')
    const searchApi = async(searchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location: 'Ankara'
                }
            })
            setResults(response.data.businesses)
            seterrorMessage('')
        } catch(error){
            seterrorMessage('Bağlantı Hatası')
        }

    };
    useEffect(()=>{
        searchApi('kebap')
    },[]);

    return [searchApi, results, errorMessage]; 
}