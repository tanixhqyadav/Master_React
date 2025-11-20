import React from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
export default function Tanishq() {
    const [dikha, setdikha] = React.useState('nhi Dikha rha');
    const {setUser} = useContext(UserContext)

    const handleClick = () => {
        setUser({dikha,setdikha});
    };

    return (
        <>  
            <div>{dikha}</div>
            <button onClick={handleClick} >Click Karo</button>
        </>
    );
}
