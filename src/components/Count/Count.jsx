import { useEffect, useState } from 'react';

const Count = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const items = [];
        for (let i = 0; i <= 10000; i++) {
            items.push(i);
        }
        setData(items);
    }, []);
    return (
        <div>
            {data.map((item, key) => (
                <div key={key}>
                    <h1>{item}</h1>
                </div>
            ))}
        </div>
    )
}


export default Count;