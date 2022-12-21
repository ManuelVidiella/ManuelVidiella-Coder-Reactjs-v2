import logo from './imgs/logo.png';
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListConteiner from './componentes/ItemListConteiner';
import { ButtonList  } from './componentes/ButtonList';
import { ArticleList } from './componentes/ArticleList';
import data from './data/data';
import { useState } from 'react';


function App() {

  const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);

	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

  return (
    <>
    <div className="App">
      <header className="App-header">
        <ul className='listH'>
          <li>
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li>
          <Navbar/>
          </li>
        </ul>
      </header>
      <ItemListConteiner/>
    </div>
      <ButtonList categories={categories} filterCategory={filterCategory}/>
      <ArticleList articles={articles}/>
    </>
  );
}

export default App;

