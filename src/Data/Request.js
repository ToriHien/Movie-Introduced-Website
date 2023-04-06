
const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=2840e75c2f60ee2c6299c2a831889bde&with_network=123`,
    fetchTrending: `/trending/all/week?api_key=2840e75c2f60ee2c6299c2a831889bde&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=2840e75c2f60ee2c6299c2a831889bde&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=2840e75c2f60ee2c6299c2a831889bde&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=2840e75c2f60ee2c6299c2a831889bde&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=2840e75c2f60ee2c6299c2a831889bde&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=2840e75c2f60ee2c6299c2a831889bde&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=2840e75c2f60ee2c6299c2a831889bde&with_genres=99`,
    fetchSearch: `/search/movie?api_key=2840e75c2f60ee2c6299c2a831889bde&language=en-US`,
};
export default requests;