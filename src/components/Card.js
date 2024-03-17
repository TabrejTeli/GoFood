import React from 'react'

export default function Card() {
  return (
    <div class="card" style={{"width": "18rem"}}>
    <img src="https://source.unsplash.com/random/300×300?pastry" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <div className='container w-100'>
          <select className='m-2 h-100  bg-success rounded'>
              {
                  Array.from(Array(6), (e,i)=> {
                      return (
                          <option key={i+1} value={i+1}>{i+1}</option>
                      )
                  })
              }
          </select>
          
          <select className='m-2 h-100  bg-success rounded'>
              <option value="half">Half</option>
              <option value="full">Full</option>
          </select>
  
          <div className=' fs-5 h-100'>
              Totla Price
          </div>
      </div>
    </div>
  </div>
  )
}
