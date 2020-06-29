import React, {useState, useEffect} from 'react'

const UseEffectHook = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}  />
            <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default UseEffectHook
