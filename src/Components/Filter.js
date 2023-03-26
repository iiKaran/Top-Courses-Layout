import React from 'react'

export default function Filterdata(props) {

  function filterHandler(filter){
        props.changeCategory(filter);
        console.log(props.category)
  }
  return (
        
      <div className='filt-cont'>
        {props.filterData.map((e)=>{
          return <div key={e.id} onClick={()=>{filterHandler(e.title)}} className='filter'>{e.title}</div>
        })}
      </div>
  )
}
