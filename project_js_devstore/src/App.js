import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import NewLatter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';
import Register from './components/PersonalArea/Register/Register';

function App() {
    return (
        <HashRouter>
        <AppContext>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/product/:id" element={<SingleProduct />} /> 
                <Route path="/register" element={<Register />} />
            </Routes>
            <NewLatter />
            <Footer />
        </AppContext>
        </HashRouter>
    );
}

export default App;
