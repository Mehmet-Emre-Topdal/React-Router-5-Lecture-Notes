import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

/**
 * useHistory ile sayfalar arası geçiş yapılır. Bir history objesi döndürür.
 * Bu objenin push ve replace isimli 2 metodu vardır. Bu metodlar string veya obje alır
 * 
 * history.push("link"): kullanıcı geri butonuna basınca geri dönebilir
 * history.replace("link"): kullanıcı geri butonuna basınca geri döneMEZ
 * 
 * obje olarak gönderilen parametre ile kullanımı
 * history.push({
 *  pathname: url'nin query parametreleri olmayan kısmı
 *  search: ? ve sonrasındaki kısım
 *  });
 * 
 * history.push() re-render'a sebep olur
 * 
 * history objesi değişmez ama useEffect'e koyulması tavsiye edilir
 */


/**
 * useLocation ile query string yani url'nin ?'den sonraki kısmını elde etmede işe yarar
 * useLocation'dan dönen location objesinin 2 önemli parametresi vardır
 * {
 *  pathname: url'nin query parametreleri olmayan kısmı
 *  search: ? ve sonrasındaki kısım
 * }
 * 
 * const queryParams = new URLSearchParams(location.search); kısmındaki
 * URLSearchParams: aldığı query parametresi içindeki değişkenleri objeye çevirir
 * query parametreleri obje olarak döndürülür. BU bir javascript özelliğidir
 */

/**
 * 
 */

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };
 

  
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
