import { useState, useEffect, useCallback } from 'react';

function useData(timeAgo, url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(() => {
        setLoading(true);
        setError(null);

        fetch(`${url}room_data/${timeAgo}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, [timeAgo, url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]); // Runs whenever timeAgo or url changes

    return { data, loading, error, fetchData };
}

export default useData;
