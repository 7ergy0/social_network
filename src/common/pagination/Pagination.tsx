import React, {useState} from "react";
import s from "./Pagination.module.css"


type PaginationType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}


function Pagination({totalItemsCount, pageSize, currentPage, onPageChanged, ...props}: PaginationType) {

    let portionSize = 10
    let pageCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++)
        pages.push(i)
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = (portionNumber * portionSize)

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(f => f >= leftPortionPageNumber && f <= rightPortionPageNumber)
                .map(m => <span className={currentPage === m ? s.selectedPage : s.pages}
                                key={m}
                                onClick={(e) => {
                                    onPageChanged(m)
                                }}>{m}</span>
                )}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Pagination;