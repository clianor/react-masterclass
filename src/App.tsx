import { useCallback } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';

const Wrapper = styled.div`
	display: flex;
	max-width: 480px;
	width: 100%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Boards = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
	padding: 30px 10px 20px;
	background-color: ${(props) => props.theme.boardColor};
	border-radius: 5px;
	min-height: 200px;
`;

const Card = styled.div`
	border-radius: 5px;
	margin-bottom: 5px;
	padding: 10px 10px;
	background-color: ${(props) => props.theme.cardColor};
`;

function App() {
	const [toDos, setTodos] = useRecoilState(toDoState);

	const onDragEnd = useCallback(
		({ draggableId, destination, source }: DropResult) => {
			console.log('dragged finished', { draggableId, destination, source });
			if (!destination) return;
			setTodos((oldToDos) => {
				const toDosCopy = [...oldToDos];
				// 1) Delete item on source.index
				toDosCopy.splice(source.index, 1);
				// 2) Put back the item on the destination.index
				toDosCopy.splice(destination.index, 0, draggableId);
				return toDosCopy;
			});
		},
		[setTodos],
	);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					<Droppable droppableId="one">
						{(magic) => (
							<Board ref={magic.innerRef} {...magic.droppableProps}>
								{toDos.map((toDo, index) => (
									<Draggable key={toDo} draggableId={toDo} index={index}>
										{(magic) => (
											<Card
												ref={magic.innerRef}
												{...magic.dragHandleProps}
												{...magic.draggableProps}>
												{toDo}
											</Card>
										)}
									</Draggable>
								))}
								{magic.placeholder}
							</Board>
						)}
					</Droppable>
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
