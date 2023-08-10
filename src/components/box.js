
import './box.css'

function Box({value,onBoxClick})
{
function handleClick(e)
{
     e.preventDefault();
     e.stopPropagation();
     onBoxClick();
}
     return(
          <>  
                  <button onClick={handleClick}>{value}</button>
                  </>

     )
}


export default Box;