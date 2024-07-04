import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');
    const [isLoadingResults, setIsLoadingResults] = useState(true);

    const searchApi = async (params) => {
        setIsLoadingResults(true);
        try {
            const response = await yelp.get('/businesses/search', {
                params
            });
            setResults(response.data.businesses);
            setIsLoadingResults(false);
        } catch (err) {
            setErrMessage('Something went wrong');
            setIsLoadingResults(false);
        }
    }

    return [searchApi, results, isLoadingResults, errMessage];
}