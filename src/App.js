import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/aside';
import Book from './components/book';
import Boy from './components/boy';
import Fackbook from './components/fackbook';
import Footer from './components/footer';
import Get from './components/get';
import Girl from './components/girl';
import Header from './components/header';
import Icons from './components/icons';
import Linkp from './components/link-p';
import Section from './components/section';
import Uncle from './components/uncle';
import Home from './home';
import Product from './product';
import Customers from './customers';
import Pricing from './pricing';
import Resources from './resources';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header />} />
        <Route path='/section' element={<Section />} />
        <Route path='/linkp' element={<Linkp />} />
        <Route path='/icons' element={<Icons />} />
        <Route path='/girl' element={<Girl />} />
        <Route path='/boy' element={<Boy />} />
        <Route path='/uncle' element={<Uncle />} />
        <Route path='/book' element={<Book />} />
        <Route path='/aside' element={<Aside />} />
        <Route path='/get' element={<Get />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/fackbook' element={<Fackbook />} />
        <Route path='/product' element={<Product />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/home' element={<Home />} />
    </Routes >
    </>
  );
}

export default App;
