import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function TodoList() {
	const [toDo, doing, done] = useRecoilValue(toDoSelector);

	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<h2>To Do</h2>
			<ul>
				{toDo.map((_toDo) => (
					<ToDo key={_toDo.id} {..._toDo} />
				))}
			</ul>
			<hr />
			<h2>Doing</h2>
			<ul>
				{doing.map((_toDo) => (
					<ToDo key={_toDo.id} {..._toDo} />
				))}
			</ul>
			<hr />
			<h2>Done</h2>
			<ul>
				{done.map((_toDo) => (
					<ToDo key={_toDo.id} {..._toDo} />
				))}
			</ul>
		</div>
	);
}

export default TodoList;
