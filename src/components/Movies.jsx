import axios from 'axios'
import React, {Fragment, useState, useEffect} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import  '../Styles/Videos.css';
import NoImg from './no-image-icon.png';


function Movies({toggle}) {
  const [moviesData, setMoviesData] = useState([])
  const Api = "https://api.themoviedb.org/3/discover/movie"
  const Images = 'https://image.tmdb.org/t/p/w500'

  const MovieCall = async () => {
    const data = await axios.get(Api,{
      params: {
        api_key: '05e139b62d5b223f6455587d55b66bb0',
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }

  useEffect(() => {
    MovieCall()
    
  }, [])



  return (
   <Fragment>
    <div className={toggle ? 'mainBgColor'  : 'secondaryBgColor'}>
      <div className='movies-container'>
      {moviesData.map((movie) => {
        return(
        <Fragment>
          <div>
            <AiFillPlayCircle  color='#fff' fontSize={40} id="playIcon"/>
            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt='' />
            <h3 id={movie.title.length> 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{movie.title}</h3>
          </div>
        </Fragment>
        )
      })}
      </div>
      </div>
   </Fragment>
  )
}

export default Movies
