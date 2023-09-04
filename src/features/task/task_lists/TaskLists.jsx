import { styled } from "styled-components";
import TaskCard from "./components/TaskCard";
import { devices } from "../../../styles/devices";
import { Link } from "react-router-dom";

const TaskLists = () => {
	return (
		<Wrapper>
			<ListWrapper>
				<Link to={`/task/232`}>
					<TaskCard />
				</Link>
				<Link to={`/task/245`}>
					<TaskCard />
				</Link>
				<Link to={`/task/246`}>
					<TaskCard />
				</Link>
				<Link to={`/task/245`}>
					<TaskCard />
				</Link>
				<Link to={`/task/232`}>
					<TaskCard />
				</Link>
				<Link to={`/task/232`}>
					<TaskCard />
				</Link>
			</ListWrapper>
		</Wrapper>
	);
};

const ListWrapper = styled.div`
	display: grid;
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
