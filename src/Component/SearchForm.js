import React,{useState,useEffect} from 'react';
import styles from './SearchForm.module.css';
import ResultList from './ResultList';
import Banner from './Banner';

const SearchForm = (props) => {
	const [search,setSearch]=useState('');
    const [isSearch,setIsSearch]=useState(Boolean);
	const [dataSearch,setDataSearch]=useState('');
	const [dataFetch,setDataFetch]=useState([])

	//ghi nhớ dữ liệu nhập vào ô search
	const searchInputHandler = (event =>{
		const searchData = event.target.value;
		setSearch(searchData);
	})

	//ghi nhận isSearch là true khi click button
	const searchClickHandler =(event =>{
		event.preventDefault();
			setIsSearch(true);
		}		
	)
	
	//ghi nhớ dữ liệu nhập vào dataSearch khi click button search
	if(isSearch && search.length > 0){
		setDataSearch(search);		 
		setIsSearch(false);
		
	}
	//hàm fetch dữ liệu vừa nhập và ghi nhớ dữ liệu nhập vào dataFetch
	async function fetchSearch(){
		const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2840e75c2f60ee2c6299c2a831889bde&query=${dataSearch}&language=en-US&page=1&include_adult=false`);
		const data = await response.json();
		const resultData = data.results;
		setDataFetch(resultData);
	 }

	 useEffect(()=>{fetchSearch()},[dataSearch])


	 
	const showForm = () => {
		return (
		<div className={styles['searchForm']}>
				<form>
					<label htmlFor='search'>&#xf002;</label>
					<input type='search' onInput={searchInputHandler}/>
					<div className={styles['btPart']}>
						<div className={styles['leftPart']}></div>
						<div className={styles['rightPart']}>
							<button className={styles['bt1']}>RESET</button>
							<button className={styles['bt2']} onClick={searchClickHandler}>SEARCH</button>
						</div>
					</div>
				</form>
			</div>
	)}
	return (
		<React.Fragment>
		<Banner showBanner='search' content={showForm()} />
		<ResultList data={dataFetch}/>
		</React.Fragment>
	);
};

export default SearchForm;
