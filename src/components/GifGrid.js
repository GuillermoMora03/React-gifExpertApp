import React from 'react'
import { useFechtGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFechtGifs( category );

    return (
        <> 
        <h3 className='animate__animated animate__slideInDown'> { category } </h3>  

        {loading && <p className='animate__animated animate__flash'>Loading</p>}

        <div className="card-gird">
                {
                    images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                         />
                    ))
                }            
        </div>

        </>
    )
}
