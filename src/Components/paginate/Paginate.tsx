import { Pagination, PaginationItem } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React from 'react'
import { returnPaginationRagne } from '../../utils/appUtils'
interface TPaginate{
    page: number,
    totalPage: number,
    siblings: number,
    handleclick: (value: any) => void
}
function Paginate({page,totalPage,siblings,handleclick}: TPaginate) {
    
    const array = returnPaginationRagne(page,totalPage,siblings)
    console.log(array)
  return (
    <div className='flex  justify-center'>
        <ul className='flex flex-wrap gap-4 text-lg font-bold'>
            <li className='cursor-pointer' onClick={() => handleclick('&lsaquo;')}><KeyboardArrowLeftIcon/></li>
            {array?.map((value) => {
                if(value === page){
                    return(
                        <li onClick={() => handleclick(value)} className='bg-secondery--color w-8 h-8 transition cursor-pointer text-black rounded-2xl flex items-center justify-center' key={value}><span>{value}</span></li>
                    )
                }
                else{
                    return(
                        <li className='cursor-pointer' onClick={() => handleclick(value)}  key={value}><span>{value}</span></li>
                    )
                }
            })}
            <li><span>...</span></li>
            <li className='cursor-pointer ' onClick={() => handleclick('&rsaquo;')}><KeyboardArrowRightIcon/></li>
        </ul>
    </div>
  )
}

export default Paginate