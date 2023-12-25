import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchDataFromApi(endpoint);
            setData(res);
        };

        fetchData();

        return () => {
            // Очистка, если необходимо
        };
    }, [endpoint]);

    return { data };
};

export default useFetch;