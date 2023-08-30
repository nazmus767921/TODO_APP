import { styled } from "styled-components";
import OneLinerTitle from "./components/OneLinerTitle";
import TaskCard from "./components/TaskCard";

const TaskLists = () => {
	return (
		<Wrapper>
			<OneLinerTitle />
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	justify-content: center;
	align-items: center;
	margin-block: 1em 5em;
`;

export default TaskLists;
