import { useEffect, useState } from "react";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, name: 'Luis' }
    ]);
    useEffect(() => {
        setIsLoading(true);
        const getFetch = async () => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await resp.json();

            setUsers(data.map(item => { return { 
                id: item.id, 
                name: item.name,
                quantity: 'sin-stock'
            }}));
            setIsLoading(false)
        }
        getFetch();
    }, [])

    return { users, isLoading }
}

export default useFetch;