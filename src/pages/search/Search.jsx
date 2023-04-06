import React, { useState } from 'react';
import styles from './Search.module.css';
import NavBar from '../../Component/NavBar';
// import Header from '../../Component/Header';
// import ResultList from '../../Component/ResultList';
// import Banner from '../../Component/Banner';
import SearchForm from '../../Component/SearchForm';
const Search = () => {
	// const [valueFetch,setValueFetch]=useState([])

	return (
		<div className={styles['seach']}>
			<NavBar></NavBar>
			{/* <Banner showBanner='search'  /> */}
			{/* <ResultList dataSearch={valueFetch} /> */}
			<SearchForm />
		</div>
		// value={setValueFetch()}
	);
};

export default Search;
