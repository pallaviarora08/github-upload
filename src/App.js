import React from 'react';
import {hot} from 'react-hot-loader';
import TodoList from './todos/TodoList';
import  styled  from 'styled-components';

const AppContainer = styled.div`
margin: 1 rem;
font-family: Arial,sans-serif;
color: #222222;`;

const App = () =>(
    <AppContainer>
        <TodoList />
    </AppContainer>
);

export default hot(module)(App);
