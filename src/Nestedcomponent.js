import React from 'react';
function Nestedcomponent (){
    return (
        <div>
            <h1>Hello</h1>
            <child />
        </div>
    )
}
const child = () => {
    return <h2>
        Child
    </h2>
    
    
}
export default Nestedcomponent