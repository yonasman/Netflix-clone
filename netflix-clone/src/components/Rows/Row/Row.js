import React, { useEffect, useState } from 'react'
import "./Row.css"
import Axios from '../../../utils/Axios'
import movieTrailer from "movie-trailer"
import YouTube from 'react-youtube'
function Row({title,fetchUrl,isLargeRow}) {

    const [movies,setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    const base_url = "http://image.tmdb.org/t/p/original";

    // useEffect to render upon refresh
    useEffect(()=> {
        (
            async()=> {
                try {
                    // console.log(fetchUrl);
                    const request = await Axios.get(fetchUrl)
                    // console.log(request);
                    setMovie(request.data.results)
                } catch (error) {
                    console.log("error",error)
                }
            }
        )()
    },[fetchUrl])

// a function to handle video
    const videoHander = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name).
            then((url) => {
                // console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                // console.log(urlParams)
                // console.log(urlParams.get("v"))
                setTrailerUrl(urlParams.get("v"))
            })
        }
    }
// styles for rendering the video
const opts = {
    height:"390px",
    width:"80%",
    playerVars:{
        autoPlay : 1,
    }
}

// return and render

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies?.map((movie,index) => (
                <img onClick={() => videoHander(movie)} key={index} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} 
                alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}></img>
            ))
            }
        </div>
        <div style={{padding: '40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    </div>
  )
}

export default Row
