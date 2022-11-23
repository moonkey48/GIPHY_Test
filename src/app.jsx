import React, {useEffect, useState,useRef} from 'react';
import s from './app.module.css';


function App({giphy}) {
    const [gifs, setGifs] = useState([0,1]);
    const searchRef = useRef();
    const formRef = useRef();


    function handleSearch(e){
      e.preventDefault();
      let q = searchRef.current.value;
      giphy
        .search(q)
        .then(results=>{
          let resultGifs = [];
          results.forEach(value=>{
            let url = value.images.downsized_medium.url;
            let title = value.title;
            let id = value.id;
            resultGifs.push([title,url,id]);
          });
          setGifs(resultGifs);
        })
      formRef.current.reset();
    }

    useEffect(()=>{
      giphy
        .getPopular()
        .then(results=>{
          let resultGifs = [];
          results.forEach(value=>{
            let url = value.images.downsized_medium.url;
            let title = value.title;
            let id = value.id;
            resultGifs.push([title,url,id]);
          });
          setGifs(resultGifs);
        });
    },[giphy]);
    return(
      <>
      <h1 className={s.title}></h1>
      <form className={s.form} ref={formRef} onSubmit={handleSearch}>
        <input className={s.searchBar} ref={searchRef} type="text"/>
      </form>
      <ul className={s.list} >{gifs.map((gif,index)=>{
        return <li key={index} className={s.item}>
          {/* <div className={s.title} >{gif[0]}</div> */}
          <img className={s.img} src={gif[1]} alt="gif image" />
        </li>
      })}</ul>
      </>
    );
}

export default App;
