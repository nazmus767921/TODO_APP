import { styled } from "styled-components";
import TopNavigationBar from "../../components/ui/TopNavigationBar";
import { PageContainer } from "../../styles/layout";
import { BsFillFileTextFill, BsCalendarMinusFill } from "react-icons/bs";
import { TbFlag3Filled } from "react-icons/tb";
import { iconFit } from "../../styles/styleObject";
import { colors } from "../../styles/colors";
import { HR } from "../../components/ui/styled_elements";
import { devices } from "../../styles/devices";
import ActionButton from "./components/ActionButton";

const TaskDetails = () => {
	return (
		<>
			<GridPageContainer>
				<TopNavigationBar />
				<Wrapper>
					<div className="header">
						<h1 className="text title">Task Name</h1>
						<p className="text category text_small">Development</p>
						<HR
							height="2px"
							style={{ marginBlock: "1.25em", borderRadius: "9999px" }}
						/>
					</div>
					<IconWrapper className="icon">
						<BsFillFileTextFill style={iconFit} />
					</IconWrapper>
					<p className="text description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
						voluptas, repudiandae cumque animi repellat ullam totam deserunt
						tenetur quam. Maxime impedit eveniet autem inventore nostrum!
					</p>
					<IconWrapper className="icon">
						<BsCalendarMinusFill style={iconFit} />
					</IconWrapper>
					<h5 className="text">Aug, 17</h5>
					<IconWrapper className="icon priority-icon">
						<TbFlag3Filled style={iconFit} />
					</IconWrapper>
					<h5 className="text priority-label">Priority 1</h5>
					<ActionButton />
				</Wrapper>
			</GridPageContainer>
		</>
	);
};

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1;
	margin-block: 0.75em;
`;

const Wrapper = styled.div`
	display: grid;
	gap: 1em;
	grid-template-columns: 1.5em 1fr;
	align-content: start;
	align-items: start;
	@media only screen and (${devices.xl}) {
		min-height: 100%;
		max-height: fit-content;
		align-content: center;
		max-width: 50%;
		margin: auto auto;
	}
	.text {
		grid-column: 2 / 3;
		align-self: center;
	}
	.icon {
		grid-column: 1 / 2;
		/* color: ${colors["teal-500"]}; */
	}
	.category {
		opacity: 0.75;
		margin-left: 0.5em;
		font-weight: 700;
	}
	.header {
		grid-column: span 2;
	}
	.title {
		grid-column: span 2;
		color: ${colors["teal-500"]};
	}
	.description {
		opacity: 0.6;
	}
	.priority-label,
	.priority-icon {
		color: ${colors["red-500"]};
	}
	h5 {
		font-weight: 700;
	}
`;

const GridPageContainer = styled(PageContainer)`
	min-height: 100vh;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr;
`;

export default TaskDetails;
