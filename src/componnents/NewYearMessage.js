
import TextNewYear from './TextNewYear.js'
import Fire        from './Fire.js'
import Welcome     from './Welcome.js'

import {useEffect, useState}  from 'react'

function NewYearMessage()
{
    const [active, setActive] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setActive(false);
        }, 10000)
    })
    return (
        <div>

            { active && <Welcome/>} 
            { !active && <TextNewYear/> }
            { !active && <Fire/> }

        </div>
    )
}


export default NewYearMessage;
