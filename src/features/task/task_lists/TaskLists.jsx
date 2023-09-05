import { styled } from "styled-components";
import TaskCard from "./components/TaskCard";
import { devices } from "../../../styles/devices";
import { Link } from "react-router-dom";
import { useTaskContext } from "../contexts/task_context";

const TaskLists = () => {
	const { list } = useTaskContext();
	return (
		<Wrapper>
			<ListWrapper>
				{list.map((task, index) => {
					return (
						<Link to={`/task/:${task.id}`} key={index}>
							<TaskCard {...task} />
						</Link>
					);
				})}
			</ListWrapper>
		</Wrapper>
	);
};

const ListWrapper = styled.div`
	display: grid;
	width: 100%;
	gap: 1.5em;
	@media only screen and (${devices.xl}) {
		gap: 2em;
		grid-auto-rows: 1fr;
		grid-template-areas: "one two three";
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	justify-content: center;
	align-items: center;
	margin-block: 5em;
`;

export default TaskLists;
