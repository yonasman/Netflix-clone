import React, { useEffect, useState } from 'react'
import requests from '../../utils/Request'
import Axios from '../../utils/Axios'
import "./banner.css"

function Banner() {
    const [movie,setMovie] = useState({})
    useEffect(()=> {
        (async()=> {
            try {
                const request = await Axios.get(requests.fetchNetflixOriginals)
                console.log(request)
                setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            } catch (error) {
                console.log("error",error)
            }
        })()
    },[])
    function truncate(str,n) {
        return str?.length > n ?str.slice(0,n) + '...':str;
    }
  return (
    <div className='banner'
    style={{
        // setting the background image of banner
        backgroundSize: 'cover',
        backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
    
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='list_button play_button'>Play</button>
                <button className='list_button'>My List</button>
            </div>
            <h1 className='banner_desc'>{truncate(movie?.overview,150)}</h1>
        </div>
        <div className='banner_fadebottom'></div>
    </div>
  )
}

export default Banner
