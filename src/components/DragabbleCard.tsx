import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div`
	border-radius: 5px;
	margin-bottom: 5px;
	padding: 10px 10px;
	background-color: ${(props) => props.theme.cardColor};
`;

interface IDragabbleCardProps {
	index: number;
	toDo: string;
}

function DragabbleCard({ index, toDo }: IDragabbleCardProps) {
	return (
		<Draggable draggableId={toDo} index={index}>
			{(magic) => {
				return (
					<Card ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
						{toDo}
					</Card>
				);
			}}
		</Draggable>
	);
}

export default React.memo(DragabbleCard);
