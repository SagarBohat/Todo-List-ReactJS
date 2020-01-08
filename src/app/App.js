import React from 'react';
import ListItme from './ListItem';
import { store } from 'react-notifications-component';


// const alert = useAlert() ;

export class App extends React.Component{
 

    constructor(props){
        super(props);
        this.state = {
            flagForDuplicateItem:false,
            items:[],
            currentItem: {
                text:'',
                key: ''
            }
        }
    }

handleInput(e) {
    const textInput = e.target.value ;
    if(textInput ==''){
        this.setState({
            flagForDuplicateItem: false
        });
    }
this.setState({
    currentItem : {
        ...this.state.currentItem,
        text: e.target.value,
        key: Date.now()
    }
});
}

addItem(e){
    e.preventDefault();
    

    const newItem = this.state.currentItem;
    
    console.log(newItem);


    if(newItem.text !==''){
        const duplicateText = this.state.items.filter(items=>items.text == newItem.text);
        if(duplicateText[0] == null){
            const newItems =[...this.state.items,newItem]; 
        console.log(duplicateText);
        this.setState({
            flagForDuplicateItem: false,
            items:newItems,
            currentItem: {
                text:'',
                key:''
            }
        });
        }
        else{
            // this.setState({flagForDuplicateItem:true});
            //  {useAlert().show(<div style={{ color: 'red' }}>Item Aleardy Exists</div>) }
            // window.alert("item alerady there")
            store.addNotification({
                title: "Warning!",
                message: "Item Already Exists",
                type: "warning",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 1500,
                  onScreen: true
                }
              });
            
          
        }
        
    }
    
}

deleteItem(key) {
const filteredItems = this.state.items.filter(item=>item.key !== key);
this.setState({
    items:filteredItems
});
}

setUpdate(text,key){
    const items = this.state.items;
    items.map(item=>{
        if(item.key===key){
            item.text = text;
        }
    })
    this.setState({
        items:items
    });
}



render(){
  return(
  <div className="container App">
      
         
      

       <form id="to-do-form" onSubmit={this.addItem.bind(this)}>
         <input
         required
         id="form-input"
          type="text" 
          placeholder="Enter Text"
          value={this.state.currentItem.text}
          onChange={this.handleInput.bind(this)}
          />
         
         <button type="submit">ADD</button>
         <ListItme
          items = {this.state.items}
          deleteItem={this.deleteItem.bind(this)}
          setUpdate={this.setUpdate.bind(this)}
          />
       </form>
    </div>
  );
}


}

