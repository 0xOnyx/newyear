
function CountDown({date})
{
    
    
    
    return(
        <div>
            <p>{ 60 - date.getSeconds() }</p>
        </div>
    )
}

export default CountDown