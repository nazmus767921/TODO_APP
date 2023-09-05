import { styled } from "styled-components";
import TextInput from "../../../components/form/TextInput";
import { useTaskContext } from "../contexts/task_context";
import { PageContainer } from "../../../styles/layout";
import TextArea from "../../../components/form/TextArea";
import { devices } from "../../../styles/devices";
import Selection from "../../../components/form/Selection";
import { colors } from "../../../styles/colors";
import { ease } from "../../../styles/animations";
import TopNavigationBar from "../../../components/ui/TopNavigationBar";

const CreateTask = () => {
	const {
		categories,
		task: { taskName, description, category },
		handle_input,
		add_task,
	} = useTaskContext();

	return (
		<Section>
			<TopPageContainer>
				<Container>
					<Wrapper>
						<TopNavigationBar />
						<h2 className="title">create a new task</h2>
						<TextInput
							name="taskName"
							type="text"
							value={taskName}
							onChange={handle_input}
							label="Task Name"
						/>
						<TextArea
							name="description"
							type="text"
							value={description}
							onChange={handle_input}
							label="Description"
						/>
						<Selection
							options={categories}
							value={category}
							label="category"
							onChange={handle_input}
						/>
					</Wrapper>
				</Container>
			</TopPageContainer>
			<BottomPageContainer>
				<CreateTaskButton type="button" onClick={add_task}>
					Create Task
				</CreateTaskButton>
			</BottomPageContainer>
		</Section>
	);
};

const CreateTaskButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
	font-weight: 900;
	background-color: ${colors["white-100"]};
	border-radius: 2em 0 0 0;
	padding: 1em 2em;
	position: absolute;
	bottom: 0;
	right: 0;
	transition: all 0.35s ${ease["out-expo"]};
	&:hover,
	:active {
		background-color: ${colors["grey-100"]};
	}
`;

const BottomPageContainer = styled.div`
	position: relative;
	background-color: ${colors["teal-500"]};
	flex-grow: 1;
	margin: -2em 0 0 0;
	padding: 2em 0 0 0;
`;

const TopPageContainer = styled.div`
	padding-bottom: 3em;
	height: 100%;
	border-radius: 0px 0px 1.5em 1.5em;
	box-shadow: 0px 5px 10px #c9c9c9;
	background-color: ${colors["white-100"]};
	position: relative;
	z-index: 10;
`;

const Wrapper = styled.div`
	display: grid;
	gap: 2em;
	grid-template-rows: auto auto 1fr;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	grid-auto-rows: auto;
	grid-template-areas: "topbar" "header";
	@media only screen and (${devices.xl}) {
		grid-template-areas: "topbar topbar" "header header" "taskname category" "description description";
		#description {
			grid-area: description;
		}
		.taskName {
			grid-area: taskName;
		}
		.title {
			grid-area: header;
		}

		#category {
			grid-area: category;
		}
	}
	#top_bar {
		grid-column: topbar;
	}

	.title {
		text-transform: capitalize;
		margin-block: 1em;
	}
`;

const Container = styled(PageContainer)`
	@media only screen and (${devices["xl"]}) {
		width: 50%;
	}
`;

const Section = styled.div`
	display: grid;
	min-height: 100vh;
	grid-template-rows: auto 1fr;
`;

export default CreateTask;
