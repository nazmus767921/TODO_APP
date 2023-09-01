import { styled } from "styled-components";
import TextInput from "../../../components/form/TextInput";
import { useTaskContext } from "../contexts/task_context";
import { IoIosArrowBack } from "react-icons/io";
import { iconFit } from "../../../styles/styleObject";
import { PageContainer } from "../../../styles/layout";
import { Link } from "react-router-dom";
import TextArea from "../../../components/form/textArea";
import { devices } from "../../../styles/devices";
import { DatePicker } from "@mui/x-date-pickers";
import Selection from "../../../components/form/Selection";
import { colors } from "../../../styles/colors";
import { ease } from "../../../styles/animations";

const CreateTask = () => {
	const {
		task: { taskName, description, schedule, category },
		handle_input,
		handle_date_input,
	} = useTaskContext();

	const sxDatePicker = {
		// ".MuiInputBase-input": { border: "2px solid red" },
		".MuiInputBase-root": { border: "2px solid red" },
	};

	return (
		<Section>
			<TopPageContainer>
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
						{/* <Form> */}
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
						{/* <DatePicker
						value={schedule}
						onChange={(newValue) => handle_date_input(newValue)}
						sx={sxDatePicker}
					/> */}
						<Selection
							value={category}
							label="category"
							onChange={handle_input}
						/>
						{/* </Form> */}
					</Wrapper>
				</PageContainer>
			</TopPageContainer>
			<BottomPageContainer>
				<CreateTaskButton>Create Task</CreateTaskButton>
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
	grid-area: topbar;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	#description {
		font-size: 1.25em;
		font-family: "Lato";
		color: #00000060;
	}
	@media only screen and (${devices.xl}) {
		flex-direction: row;
		gap: 2em;
		align-items: flex-start;
	}
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

	.title {
		text-transform: capitalize;
		margin-block: 1em;
	}
`;

const Section = styled.div`
	display: grid;
	min-height: 100vh;
	/* flex-direction: column; */
	grid-template-rows: auto 1fr;
`;

export default CreateTask;
