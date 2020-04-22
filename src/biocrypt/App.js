import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications';
import './App.css';
import NavBar from './navbar/NavBar';
import Home from '../home/pages/Home';
import { setupAppStore } from '../store'

const store = setupAppStore()

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}
 
export default App;
