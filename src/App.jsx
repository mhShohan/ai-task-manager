import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './components/pages/usersList/UserList';
import User from './components/pages/user/User';
import CreateUser from './components/pages/createUser/CreateUser';
import ProductList from './components/pages/product/ProductList';
import SingleProduct from './components/pages/product/singleProduct/SingleProduct';
import CreateProduct from './components/pages/product/createProduct/CreateProduct';
import styled from 'styled-components';

function App() {
    return (
        <Router>
            <Topbar />
            <Container>
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/users" exact component={UserList} />
                    <Route path="/user/:userId" exact component={User} />
                    <Route path="/createUser" exact component={CreateUser} />
                    <Route path="/products" exact component={ProductList} />
                    <Route
                        path="/products/:userId"
                        exact
                        component={SingleProduct}
                    />
                    <Route
                        path="/product/create"
                        exact
                        component={CreateProduct}
                    />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;

const Container = styled.div`
    display: flex;
`;
