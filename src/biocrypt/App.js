import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './navbar/NavBar';
import Home from '../home/pages/Home';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <nav>
                    <NavBar />
                </nav>
                <main>
                    <br />
                    <div className="container jumbotron">
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </main>
            </BrowserRouter>
        </React.Fragment>
    );
}
 
export default App;
