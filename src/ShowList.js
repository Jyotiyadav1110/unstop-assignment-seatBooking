import React from 'react'
import { bookedSeats,seats as seatList } from './util/BookSeat'

const ShowList = ({setShowList}) => {
  return (
    <div className='showlist'>
        {seatList.map((row,ind)=> {
          return (
            <div className='row' key={'row'+ind}>
              {row.map((num,indCol) => (
                <div>
                  <div key={'col'+indCol} className={`seat ${bookedSeats.has(num)?'booked':''}`}>{num}</div>
                </div>
                
              ))}
            </div>
          )
        })}
        
    </div>
  )
}

export default ShowList