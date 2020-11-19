import React, {useState, useEffect} from 'react'; 

import fetchData from './components/FetchData';
import ItemCard from './components/ItemCard';
import Loading from './components/Loading';
import Bottom from './components/Bottom';

function App() {
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [bottomReached, setBottomReached] = useState(false);
    const [errorMessage, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [scrolledToBottom, setScrolledToBottom] = useState(false);

    const handleScroll = (event) => {
        const {scrollTop, clientHeight, scrollHeight} = event.target.documentElement;
        if (scrollHeight - scrollTop === clientHeight) {
            setScrolledToBottom(true);
        }
    };

    const handleError = (error) => {
        setError(error);
    };

    //Component DidMount add event listener for scrolling. 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        //Component DidUnmount remove event listener.
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    //Fetch new data when page has change. 
    useEffect(() => {
        fetchData(page)
            .then(newData => {
                setArticles(prevArticles => {
                    if (newData.length === 0) {
                        setBottomReached(true);
                    }
                    return [...prevArticles, ...newData];
                });
            })
            .catch(error => handleError(error))
            .finally(() => setIsLoading(false));
    }, [page]);

    useEffect(() => {
        if (scrolledToBottom && !isLoading){
            setPage(prev => prev + 1);
            setIsLoading(true);
        }
        setScrolledToBottom(false);
    }, [scrolledToBottom, isLoading]);

    if (errorMessage && articles.length === 0 )  {
        return (
            <div className='error'>
                <h1>Sorry, an error occurred...</h1>
                <h2>Please try again later</h2>
                <p className='text-danger'>{errorMessage.message}</p>
            </div>
        );
    }
    return (
        <div className="container-xl">
            <div className="d-flex justify-content-around flex-wrap">
                { articles && articles.map((article,id) => <ItemCard article={article} key={id}/>) } 
            </div>
            { (isLoading && !bottomReached) ? <Loading /> : null } 
            { bottomReached && <Bottom /> }
        </div>
    );
}

export default App;
