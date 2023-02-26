import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

/**
 * Layout: Bir UI component. Sayfa içeriklerini düzgün yerleştirmeni sağlar
 * Bunu sen kendin yazıyorsun, react router vermiyor.
 * 
 * Switch: Sadece 1 tane route içindeki componentin render edilmesini sağlar
 * 
 * Render edilecek componentler yani pageler iki tane <Route> içine yazılır
 * 
 * Linklerin başlangıcına göre route seçilir, yanlış seçimleri engellemek için
 * exact kullanılır
 * 
 * <Route path='/' exact> path parametreleri olMAyan index sayfasıdır. Buraya gelen 
 * kullanıcılar
 * <Redirect to='/quotes' /> ile quotes sayfasına yönlendirilir
 * 
 * path='*' : * "bütün" demektir. <Route path='*'> ifadesinin en aşşağıya koyulması
 * implemente edilmeyen url'lere verilecek tepkidir. Bu uygulamada implemente edilmeyen 
 * url'leri notFound sayfasına yönlendiriyoruz 
 * 
 * '/quotes/:quoteId' dinamik bir url'dir. dinamik kısım için : iki nokta üst üste zorunludur
 */

function App() {
  return (
    <Layout> 
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
