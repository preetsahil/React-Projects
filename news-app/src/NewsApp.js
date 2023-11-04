import React, { useEffect, useState, useRef } from 'react';
import News from './News';
import './NewsApp.css';

function NewsApp() {
  const apiKey = 'a79eb887516e4123a69ae78aef0ad766';
  const [newList, setNewsList] = useState([]);
  const [query, setQuery] = useState('tesla');
  const [error, setError] = useState(''); 
  const [previousQuery,setPreviousQuery]=useState('');
  const selectRef=useRef(null)
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-10-04&sortBy=publishedAt&apiKey=${apiKey}`;

  const queryInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
      setError(''); 

    } catch (e) {
      console.log(e, 'error occurred');
      setError('An error occurred while fetching data.');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const queryValue = queryInputRef.current.value;

    if (queryValue.trim() === '') {
      setError('Please enter a search query.'); 
      setQuery('tesla');
    }
     else {
      setPreviousQuery(query)
      setQuery(queryValue);
    }
  }

  function handleBackspace(e){
    if(e.key=='Backspace' && queryInputRef.current.value===''){
        setQuery(previousQuery);
    }
  }
  function handleSelection(e){
   const selectQuery=selectRef.current.value
   setQuery(selectQuery)
//    console.log(selectQuery) 



  }

  return (
    <div className="news-app">
      <h1 style={{
        fontSize: '3rem',
        fontFamily: 'monospace',
        textAlign: 'left',
        marginBottom: '20px'
      }}>News Daily</h1>
      <form onSubmit={handleSubmit}>
        <input className='query-input' onKeyUp={handleBackspace} type="text" ref={queryInputRef} />
        <input className='btn-submit' onClick={handleSubmit} type="submit" value='search' name="submit" />
      </form>
      {error && <p className="error-message">{error}</p>}
      <div style={{display:'flex',gap:'15px'}} >
        <p>You can select from some topics that i added</p>
      <select onChange={handleSelection} ref={selectRef} style={{textAlign:'center',padding:'10px',marginBottom:'20px'}}>
        <option value="tesla">Tesla</option>
        <option value="Usa">Usa</option>
        <option value="fifa">Fifa</option>
        <option value="israel">Israel</option>
        <option value="russia">Russia</option>
        <option value="palestine">Palestine</option>
        <option value="ukraine">Ukraine</option>
      </select>
      </div>
     
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 48%)',
          justifyContent: 'space-between',
          rowGap: '20px'
        }}>
        {newList.map((news, index) => (
          <News key={`${news.url} ${index}`} news={news} />
        ))}
      </div>
    </div>
  );
}

export default NewsApp;
