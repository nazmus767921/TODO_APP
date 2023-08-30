import { styled } from "styled-components";
import TextInput from "./components/form/TextInput";
import { useTaskContext } from "../contexts/task_context";
import { IoIosArrowBack } from "react-icons/io";
import { iconFit } from "../../../styles/styleObject";
import { PageContainer } from "../../../styles/layout";
import { Link } from "react-router-dom";

const CreateTask = () => {
	const {
		task: { taskName, description },
		handle_input,
	} = useTaskContext();

	return (
		<PageContainer>
			<Wrapper>
				<TopBar>
					<Link to={`/`}>
						<BackHomeButton>
							<IoIosArrowBack style={iconFit} />
						</BackHomeButton>
					</Link>
				</TopBar>
				<h2 className="title">create a new Task</h2>
				<TextInput
					name="taskName"
					type="text"
					value={taskName}
					onChange={handle_input}
					label="Task Name"
				/>
				<TextInput
					name="description"
					type="text"
					value={description}
					onChange={handle_input}
					label="Description"
				/>
			</Wrapper>
		</PageContainer>
	);
};

const BackHomeButton = styled.button`
	width: 2em;
	aspect-ratio: 1;
`;

const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-block: 2em;
	width: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.title {
		text-transform: capitalize;
		margin-block: 1em;
	}
`;

export default CreateTask;
