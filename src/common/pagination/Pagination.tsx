import React from "react";
import s from "./Pagination.module.css"


type PaginationType={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(pageNumber: number)=>void
}


function Pagination({totalUsersCount,pageSize,currentPage,onPageChanged,...props}:PaginationType){
    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++)
        pages.push(i)
    return(
        <div className={s.paginator}>
            {pages.map(m => <span className={currentPage === m ? s.selectedPage : s.pages}
                                  onClick={(e) => {
                                      onPageChanged(m)
                                  }}>{m}</span>
            )}
        </div>
    )
}
export default Pagination;