import { useState, useEffect } from "react";
import { FIRESTORE_DB } from "../../FirebaseConfig";
import { collection, addDoc, limit, query, getDocs, orderBy } from "firebase/firestore"; 

export default () => {
    const [fireitems, setFireItems] = useState([]);
    const [fireErrMessage, setFireErrMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const afs = FIRESTORE_DB;

    const getFireItems = async (colName, limitNum, lastDocument) => {
        setIsLoading(true);
        try {
            const queryConstraints = [];
            if (lastDocument) {
              queryConstraints.push(startAfter([lastDoc]));
            }
            if (limitNum) {
              queryConstraints.push(limit(limitNum));
            }
            const q = query(collection(afs, colName), orderBy('title', 'desc'), ...queryConstraints);
            const res = await getDocs(q);
            const items = res.docs.map(e => {
                return {...e.data()}
            });
            setFireItems(items);
            setIsLoading(false);
        } catch (err) {
            setFireErrMessage('Something went wrong');
            setIsLoading(false);
        }
    }

    return [getFireItems, fireitems, isLoading, fireErrMessage];
}