import React, { useEffect, useState } from 'react'

import './Pagination.css'
// import Pagination from 'react-responsive-pagination';

// ===========================================================================
// import React, { useState } from 'react';
// import Pagination from 'react-responsive-pagination';



// function Pagin() {
//   const [currentPage, setCurrentPage] = useState(4);

//   const totalPages = 17;
  
                      
//     return (
//         <div>
//       <Pagination
//       current={currentPage}
//       total={totalPages}
//       onPageChange={setCurrentPage}
//     />
//         </div>
//     )
// }

// ===========================================================================

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
   
    const [counter, setcounter] = useState(1)
    const [numberOfButton, setnumberOfButton] = useState((Math.ceil(total / showPerPage)))

    useEffect(() => {
        const value = showPerPage * counter
        onPaginationChange(value - showPerPage, value)

    }, [counter])
    const onButtonClick = (event,type) => {
        event.preventDefault()
        if (type === "prev") {
            if (counter === 1) {
                setcounter(1)
            } else {
                setcounter(counter - 1)
            }

        } else if (type === "next") {
            if (numberOfButton === counter) {
                setcounter(counter)
            } else {
                setcounter(counter + 1)
            }
        }
    }

    return (
        <div className="d-flex justify-content-center"  id="content">

            <nav aria-label="Page navigation example">
                <ul className="pagination ">
                    <li className="page-item"
                        onClick={(event) => onButtonClick(event,"prev")}
                    ><a className="page-link" href="!#">Previous</a></li>

                    {
                        new Array(numberOfButton).fill('').map((el, index) => (
                            <li className={`page-item ${index + 1 === counter ? "active" : null}`}><a className="page-link" href="!#"
                                onClick={(event) =>{event.preventDefault();setcounter(index + 1)} }>{index + 1}</a></li>
                        ))
                    }
                    <li className="page-item"
                        onClick={(event) => onButtonClick(event,"next")}
                    ><a className="page-link" href="!#">Next</a></li>
                </ul>
            </nav>




        </div>
        
    )
}

export default Pagination