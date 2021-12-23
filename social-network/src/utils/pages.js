import { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import classes from "./Pages.module.css";

export const getPagesCount = (totalCount, pageSize) => {
    return Math.ceil(totalCount / pageSize);
}

export const getPagesArray = (totalPages) => {
    let pages = [];
    for (let i = 1; i < totalPages; i++) {
        pages.push(i);
    }
    return pages;
}

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={classes.pageWrapper}>
            {portionNumber > 1 &&
                <MyButton onClick={() => setPortionNumber(portionNumber - 1)}>PREV</MyButton>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map((p) => {
                return <span
                    key={p}
                    onClick={(e) => onPageChanged(p)}
                    className={currentPage === p ? classes.pageSelected : classes.page}>{p}</span>
            }
            )}
            {portionCount > portionNumber &&
                <MyButton onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</MyButton>}
        </div>)
}

export default Paginator;