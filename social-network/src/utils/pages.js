export const getPagesCount = (totalCount, pageSize) => {
    return Math.ceil(totalCount / pageSize);
}

export const getPagesArray = (totalPages) => {
    let pages = [];
    for (let i=1; i<totalPages; i++) {
        pages.push(i);
    }
    return pages;
}