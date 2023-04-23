import React,{useState, memo} from 'react';
import { useEffect } from 'react';
import styles from './ResultList.module.css';
import MovieDetail from './MovieDetail'
const ResultList = (props) =>{
    const [showResultList,setShowResultList] = useState('');
    const [movie2,setMovie2] = useState([]);
    const dataMovie = props.data
    //hiển thị danh sách movie khi search thông tin
    const resultMovie = () => {
        if(dataMovie.length===0){
            return(<div></div>);
        }
        else{
            setShowResultList(dataMovie.map(film => {
                const movieDataHandler = () => {
                    setMovie2(film)

                };
                return (
                    <div className={styles['backdrop']}>
                        <img alt='film' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`}  />
                        <div className={styles.overlay} onClick={movieDataHandler}></div>
                    </div>
                )
            }))
        }
    }
    console.log(movie2)
    useEffect(()=>{resultMovie()},[dataMovie])
	return (
        <React.Fragment>
            <div className={styles['resultList']}>
                <p>Search Results</p>
                <MovieDetail movieData={movie2} search={movie2}/>
                <div className={styles['backdropList']}>
                    {showResultList}
                </div>
            </div>
        </React.Fragment>
	);
};

export default memo(ResultList);
