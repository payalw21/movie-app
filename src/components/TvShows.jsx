import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import NoImg from './no-image-icon.png';
import "../Styles/Videos.css";

function TvShows({toggle, inputValue}) {
  const [showData, setShowData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState('')
  const Api = "https://api.themoviedb.org/3/discover/tv"
  const Images = 'https://image.tmdb.org/t/p/w500'

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params : {
        api_key: '05e139b62d5b223f6455587d55b66bb0',
      }
    })
    const result = data.data.results;
    setShowData(result)

  }
    useEffect(() => {
      TvShows()
    },[])

    const TvShowTitle = (shows) => {
     setTitle(shows.name)
     setTrailer(prev => !prev)


  }

  return (
    <Fragment>
     <div className={toggle ? 'mainBgColor'  : 'secondaryBgColor'}>
      <div className='movies-container'>
      {showData.map((shows) => {
        return(
          <Fragment key={shows.id}>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => TvShowTitle(shows)}/>
              <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg}  alt=""  onClick={() => TvShowTitle(shows)}/>
              <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{shows.name}</h3>
            </div>
          </Fragment>
        )
      })}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color="#fff" cursor="pointer" onClick={() => setTrailer(true)}/>
      </div>
     </div>
    </Fragment>
  )
}

export default TvShows
