import React from 'react'

function List() {
    const [items, setItems] = React.useState([]);
  
    const addItem = () => {
      setItems([...items, `Item ${items.length + 1}`]);
    };
  
    return (
      <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default List;
  
  
  
  
  