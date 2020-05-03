import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
background: #fff;
border-radius: 8px;
margin-top: 8px;
padding: 16px;
position: relative;
box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithRecent = styled(TodoItemContainer)`
border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now()-864000 * 1)? '2px solid green' : '2px solid red')};
`;
const ButtonContainer = styled.div`position: absolute;
right: 12px;
bottom: 12px;`;

const Button = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
display: inline-block;
`;

const CompletedButton = styled(Button)`

background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
background-color: #ee2222;
margin-left: 8px;`;

const TodoListItem = ({ todo,onRemovePressed, onCompletePressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithRecent;
    return (
    <Container createdAt={todo.createdAt}>
        <h3>{todo.text}</h3>
        <p>Created at:&nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
        </p>
        <ButtonContainer>
        {todo.isCompleted ? null : <CompletedButton onClick={() => onCompletePressed(todo.id)}>Mark as Completed</CompletedButton>}
        <RemoveButton  onClick={() => onRemovePressed(todo.id)}>Remove</RemoveButton>
        </ButtonContainer>
      
        </Container>
        );
    }

export default TodoListItem;