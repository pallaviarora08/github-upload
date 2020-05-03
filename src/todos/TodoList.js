import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest,updateTodoRequest } from './thunks';
import {  getTodosLoading, getCompleteTodos,getIncompleteTodos } from './selectors';
import styled from 'styled-components';

const ListWrapper = styled.div`
max-width: 700px;
margin: auto;
    `;

const TodoList= ({ completeTodos,incompeteTodos, onRemovePressed, onCompletePressed, isLoading,startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    },[]);
    
    const loadingMessage = <div> Loading Todos...</div>
    const content= (
    <ListWrapper>
        <NewTodoForm />
        <h3>Incomplete Todos : </h3>
        {incompeteTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed}/>)}
        <h3>Completed Todos : </h3>
        {completeTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed}/>)}
        
    </ListWrapper>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state =>({
    isLoading: getTodosLoading(state),
    completeTodos: getCompleteTodos(state),
    incompeteTodos : getIncompleteTodos(state),
});
const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(updateTodoRequest(id)),
});
export default  connect(mapStateToProps,mapDispatchToProps)(TodoList);

