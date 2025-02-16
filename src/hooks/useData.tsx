import { useState, useEffect } from 'react';

function useData(timeago, url) {
    const [data, setData] = useState([]);    
    useEffect(() => {
        fetch('url' + timeago)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return { data };
}

export default useData;