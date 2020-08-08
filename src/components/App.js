import React, { useState } from "react";
import ResourceList from './ResourceList';

const App = () => {

    const [currentResource, setResource] = useState('posts')
    //console.log(useState('posts'))
    return (
        <div>
            <div>
                <button onClick={() => setResource('posts') }>Posts</button>
                <button onClick={() => setResource('todos') }>Todos</button>
            </div>
            <ResourceList resource={currentResource}/>
        </div>)
}

export default App;
