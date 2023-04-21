import React,{useState} from 'react';
import { useEffect } from 'react';
import styles from './ResultList.module.css';

const ResultList = (props) =>{
    const [showResultList,setShowResultList] = useState('');

    //hiển thị danh sách movie khi search thông tin
    const resultMovie = (movie => {
        if(movie===undefined){
            return(<div></div>);
        }
        else{
            setShowResultList(movie.map(film => {
                return (<img alt='film' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`} className={styles['backdrop']} />
                )
            
        }))}
    })

    useEffect(()=>{resultMovie(props.data)},[props.data])
	return (
        <React.Fragment>
            <div className={styles['resultList']}>
                <p>Search Result</p>
                <div className={styles['backdropList']}>
                    {showResultList}
                </div>
            </div>
        </React.Fragment>
	);
};

export default ResultList;
