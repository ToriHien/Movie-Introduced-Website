import React, {useState, useEffect } from "react";
import styles from "./MovieList.module.css";
import MovieDetail from "./MovieDetail";

function MovieList(props) {
    // Tạo biến để hiển thị thông tin movie
    const [movies,setMovies] = useState([]);
    const [isMovies, setIsMovies] = useState(Boolean);
    const [movie,setMovie] = useState([]);
    const [isMovie,setIsMovie] = useState(Boolean)
    
    // Lấy dữ liệu Database List Film của trang themoviedb
    async function fetchMovieList() {
        const response = await fetch(`https://api.themoviedb.org/3${props.url}`);
        const data= await response.json();
        const transformedMovieList = data.results;
        setMovies(transformedMovieList);
        setIsMovies(true);
       }

    // Tạo phương thức hiển thị List Film
    const movieShow= () => {
        //Điều kiện hiển thị film dành cho mục khác k phải là Original
        if(isMovies && props.url!==`/discover/tv?api_key=2840e75c2f60ee2c6299c2a831889bde&with_network=123`){
            return(
                <React.Fragment>
                <div className={styles['listFilm']}>
                    <h1>{props.title}</h1>
                    <div className={styles['films']}>
                        
                        {/* Chuyển từng dữ liệu của List Film thành hiển thị thông tin bộ film khi click hình bộ phim*/}
                    {movies.map(film=>{
                        const movieDataHandler = () => {
                            setMovie(film);
                            if(!isMovie){
                                setIsMovie(true);
                            }
                            if(isMovie){
                                setIsMovie(false);
                            }
                        };
                        return(
                            <div className={styles['film']} key={film.id} >
                                    <img  alt='film hay' onClick={movieDataHandler} src={`https://www.themoviedb.org/t/p/w500_and_h282_face/${film.backdrop_path}`}> 
                                    </img>
                            </div>
                        )
                    })}
                    </div>
                </div>
                </React.Fragment>
            )
        };

        //Điều kiện hiển thị film dành cho mục Original
        if(isMovies && props.url===`/discover/tv?api_key=2840e75c2f60ee2c6299c2a831889bde&with_network=123`){
            return(
                <React.Fragment>
                <div className={styles['listFilm2']}>
                    <div className={styles['films2']}>
                        {/* Chuyển từng dữ liệu của List Film thành hiển thị thông tin bộ film khi click hình bộ phim*/}
                    {movies.map(film=>{
                        const movieDataHandler = () => {
                            setMovie(film);
                            if(!isMovie){
                                setIsMovie(true);
                            }
                            if(isMovie){
                                setIsMovie(false);
                            }
                        };
                        return(
                            <div className={styles['film2']} key={film.id}   >
                                <img alt='film' onClick={movieDataHandler} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${film.poster_path}`}></img>
                            </div>
                        )
                    })}
                    </div>
                </div>
                </React.Fragment> 
            )
        }
        if(!isMovies) {
            return(
                <div> chưa có films</div>    
            )
        }
    }
    useEffect(() => {fetchMovieList()},[]);

    return(
        <React.Fragment>
            {movieShow()}
            {isMovie && <MovieDetail movieData={movie} />}
        </React.Fragment>
    )
}
export default MovieList;
