import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(count - 1);
    }


    return (
        <div>
            <h1>hello world</h1>
            <h3>counter : {count}</h3>
            <button style={{ border: '2px solid yellow' }} onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}