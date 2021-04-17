import { get } from 'axios';
import React, { useEffect, useState } from 'react'

export default (url, headers = {}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            const { data } = await get(url, { headers: headers });

            setData(data);
            setLoading(false);
        } catch (e) {
            setError(true);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading };
}