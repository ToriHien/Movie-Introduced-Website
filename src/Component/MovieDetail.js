import React, { useEffect, useState } from "react";
import styles from "./MovieDetail.module.css";
import YouTube from "react-youtube";
function MovieDetail(props) {
    // thiết lập trạng thái để hiển thị các đoạn video
    const [movieFetch,setMovieFetch]=useState([]);
    const [error,setError]=useState(null);

    // thiết lập cách để lọc ra video trailer, Teaser
    const youtubeData = (transformedMovie) => {
            let id='';
            const hasTrailer = transformedMovie.find(movie => movie.type === 'Trailer');
            const hasTeaser = transformedMovie.find(movie => movie.type=== 'Teaser')
            if(hasTrailer) {
                id=hasTrailer.key;
            }
            else if(hasTeaser) {
                id=hasTeaser.key;
            }
            else if(!hasTeaser && !hasTrailer){
                id='';
            }
            else if(transformedMovie ===['']){
                id='';
            }
            return(
                <React.Fragment>
                {id.length >= 1 && <YouTube  videoId={`${id}`} className={styles['youtube']} opts={opts}/>}
                {id.length === 0 && <img className={styles['imgReplace']} alt='film' src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${props.movieData.poster_path}`} />}
                {console.log(transformedMovie)}
                </React.Fragment>
            )
        }
    
    // thiết lập cách để lấy dữ liệu film
    async function fetchDataMovie(){
        setError(null);
        try{
        const response = await fetch(`https://api.themoviedb.org/3//movie/${props.movieData.id}/videos?api_key=2840e75c2f60ee2c6299c2a831889bde`)
        if(!response.ok){
            throw new Error('bi loi DataBase')
        }
        const data = await response.json();
        const transformedMovie = data.results;
        setMovieFetch(youtubeData(transformedMovie));}
        catch(error){
            setError(error.message);
        }
    }  
        
    // Biến dành cho Youtube Component
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    }

    useEffect( () => {
        fetchDataMovie();
    },[]);
    return(
       <React.Fragment>
        <div className={styles['movieDetail']} >
            <div className={styles['leftPart']}>
                <h1>{props.movieData.title}</h1>
                <div className={styles['relaseAndVote']}>
                    <p>Release Date: {props.movieData.release_date}</p>
                    <p>Vote: {props.movieData.vote_average}/10</p>
                </div>
                <p>{props.movieData.overview}</p>
            </div>
            <div className={styles['rightPart']}>
                {movieFetch}
                {error}
            </div>
        </div>
       </React.Fragment>
    )
}

export default MovieDetail;
