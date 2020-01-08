import React from 'react';
import FlipMove from 'react-flip-move';


function ListItme(props) {
    const items = props.items;
    
    const listItems = items.map(item => {
        const handleChange =(e)=>{
            props.setUpdate(e.target.value, item.key);
            }
        return <div className="list" key={item.key}>
            <p>
                <input 
                type="text" 
                id={item.key} 
                value={item.text}
                className="inner-list-input"
                onChange={handleChange}/>
                <i 
                className="fa fa-trash  iconTrash" 
                aria-hidden="true"
                onClick={()=>props.deleteItem(item.key)}></i>
            
            </p>

           
        </div>
    })

return(
<div>

<FlipMove duration={500} easing="ease-in-out">
{listItems}
    </FlipMove>    

</div>

)
}

export default ListItme ;