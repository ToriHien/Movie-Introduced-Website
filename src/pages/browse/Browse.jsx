import React from 'react';
import NavBar from '../../Component/NavBar';
import styles from './Browse.module.css';
// import Header from '../../Component/Header';
import MovieList from '../../Component/MovieList';
import requests from "../../Data/Request";
import Banner from '../../Component/Banner';

function Browse() {
	return (
		<React.Fragment>
			<div className={styles['app']}>
				<NavBar></NavBar>
				<Banner showBanner='banner' />
				<MovieList title='Original' url={requests.fetchNetflixOriginals}></MovieList>
				<MovieList title='Xu hướng' url={requests.fetchTrending}></MovieList>
				<MovieList title='Xếp hạng cao' url={requests.fetchTopRated}></MovieList>
				<MovieList title='Hành động' url={requests.fetchActionMovies}></MovieList>
				<MovieList title='Hài' url={requests.fetchComedyMovies}></MovieList>
				<MovieList title='Kinh dị' url={requests.fetchHorrorMovies}></MovieList>
				<MovieList title='Lãng mạn' url={requests.fetchRomanceMovies}></MovieList>
				<MovieList title='Tài liệu' url={requests.fetchDocumentaries}></MovieList>
			
			</div>
        </React.Fragment>
		
	);
}

export default Browse;

