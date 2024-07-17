import { useEffect, useState } from 'react';

export const useAuthorize = (initDataRow) => {
    const [data, setData] = useState();
    
    useEffect(() => {
        fetch('http://localhost:8080/api/auth', {
            method: 'POST',
            headers: {
                Authorization: `tma ${initDataRow}`
            },
        })
        .then(res => res.text())
        .then(data => setData(data));
    }, [initDataRow]);

    
    return data;
};