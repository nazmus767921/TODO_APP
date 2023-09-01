import { styled } from "styled-components";
import OneLinerTitle from "./components/OneLinerTitle";
import TaskCard from "./components/TaskCard";
import { devices } from "../../../styles/devices";

const TaskLists = () => {
	return (
		<Wrapper>
			<OneLinerTitle />
			<ListWrapper>
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
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
