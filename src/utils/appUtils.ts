import _ from "lodash"
export const returnPaginationRagne = (totalPage:number,siblings:number) => {
    let totalPageNoInArray = 7 + siblings
    if(totalPageNoInArray >= totalPage){
        return  _.range(((totalPageNoInArray + 5) - 12), totalPageNoInArray + 5)
    }
    

}