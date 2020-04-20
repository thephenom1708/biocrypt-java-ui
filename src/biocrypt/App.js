import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications';
import './App.css';
import NavBar from './navbar/NavBar';
import Home from '../home/pages/Home';

function App() {
    return (
        <React.Fragment>
            <ToastProvider autoDismiss autoDismissTimeout={4000} placement={"bottom-center"}>
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
            </ToastProvider>
        </React.Fragment>
    );
}
 
export default App;
