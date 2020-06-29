import React, { useState } from 'react'

const UseStateWithObjects = () => {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            </form>

      first name is : {name.firstName} &nbsp;

      last Name is : {name.lastName}
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default UseStateWithObjects
