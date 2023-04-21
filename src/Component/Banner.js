import React, { useState, useEffect, useCallback } from "react";
import styles from "./Banner.module.css"
import requests from "../Data/Request";
function Banner(props) {
    //Thiết lập trạng thái hiển thị Banner từ data NetFlix
    const [netflix,setNetflix] = useState([]); 
    const [isOpen, setIsOpen] = useState(Boolean);
    
    //Tạo phương thức lấy dữ liệu movie từ trang themoviedb
    const fetchNetflixOriginals = useCallback(async() => {
     const response =   await fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
     const dataNetflix = await response.json();
     const randomNetflix = Math.floor(Math.random() * dataNetflix.results.length - 1);
     const transformedNetflix = dataNetflix.results[randomNetflix];
     setNetflix(transformedNetflix);
     setIsOpen(true);
    },[])

    // Tạo Phương thức hiển thị ảnh nền backdrop
    const bannerShow = () => {
        if(isOpen) {
            return(
                <div>
                    <img alt="NetflixImage" src={`https://image.tmdb.org/t/p/original/${netflix.backdrop_path}`} className={styles['backdrop_path']}></img>
                        <h1 className={styles['name']}>{netflix.name}</h1>
                        <div className={styles['btContain']}>
                            <button className={styles['bt']}>Play</button>
                            <button className={styles['bt']}>My List</button>
                        </div>
                        <div className={styles['overview']}>{netflix.overview}</div>
                </div>    
            )
        } 
        if(!isOpen) {
            return(
                <div> chưa có banner</div> 
                
            )
        }
    }

    useEffect(()=>{fetchNetflixOriginals()},[fetchNetflixOriginals])
    return (
        <React.Fragment>
            <div className={styles['header']}>
                <div className={styles['banner']}> 
                {props.showBanner==='banner' && bannerShow()}
                {props.showBanner==='search' && props.content} 
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;
