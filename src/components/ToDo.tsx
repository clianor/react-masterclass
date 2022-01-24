import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDo({ id, text, category }: IToDo) {
	const setToDos = useSetRecoilState(toDoState);

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;

		setToDos((oldTodos) => {
			const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
			const newTodo = { text, id, category, name };
			return oldTodos;
		});
	};

	return (
		<li>
			<span>{text}</span>
			{category !== 'DOING' && (
				<button name="DOING" onClick={onClick}>
					Doing
				</button>
			)}
			{category !== 'TO_DO' && (
				<button name="TO_DO" onClick={onClick}>
					To Do
				</button>
			)}
			{category !== 'DONE' && (
				<button name="DONE" onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
}

export default ToDo;
