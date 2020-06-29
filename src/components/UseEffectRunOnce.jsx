import React, { useState, useEffect } from 'react'

const UseEffectRunOnce = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log('Effect Called')
        window.addEventListener('mousemove', logMousePos)
    }, []) // run the effect only once on initial render

    const logMousePos = (e) => {

        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)

    }

    return (
        <div>
            Hook X - {x} Y - {y}
        </div>
    )
}

export default UseEffectRunOnce
