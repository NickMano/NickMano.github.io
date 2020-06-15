import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import WIP from '../containers/WIP'
import Layout from '../components/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:id' component={WIP} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App