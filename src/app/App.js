import React from 'react';
import ListBooks from './container/ListBooks';
import CreateBook from './container/CreateBook';
import Header from './common/Header';
import Footer from './common/Footer';
import NotFound from './common/NotFound';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <div className='app'>
                <Header heading='Library World'/>
                <Switch>
                    <Route path='/' exact component={ListBooks} />
                    <Route path='/create' component={CreateBook}/>  
                    <Route path='*' component={NotFound} />                
                </Switch>
                <Footer title='Copyright@ 2020 Ravi Talari'/>
            </div>
        )
    }
}

export default App;