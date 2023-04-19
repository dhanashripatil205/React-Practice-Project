import React from 'react'

function Stock(props) {

    function StockValue(){
        return props.stockvalue >0
    }

  return (
    <div>
{
    StockValue()?<div>Stock value is Greter than 0</div>:<div>Stock value is 0</div>
}
    </div>
  )
}

export default Stock