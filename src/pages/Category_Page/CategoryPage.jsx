import { styled } from "styled-components";
import { PageContainer } from "../../styles/layout";
import TopNavigationBar from "../../components/ui/TopNavigationBar";
import { colors } from "../../styles/colors";
import TaskLists from "../../features/task/task_lists/TaskLists";
import { HR } from "../../components/ui/styled_elements";
import { iconFit } from "../../styles/styleObject";
import { CgQuote } from "react-icons/cg";

const CategoryPage = () => {
	return (
		<GridPageContainer>
			<TopNavigationBar />
			<Wrapper>
				<div>
					<div style={{ position: "relative" }}>
						<IconWrapper>
							<CgQuote style={iconFit} />
						</IconWrapper>
						<h2 className="Header">
							You&apos;have 10 Development tasks to complete
						</h2>
					</div>
					<HR
						height="2px"
						style={{ marginBlock: "2em", borderRadius: "9999px" }}
					/>
				</div>
				<TaskLists />
			</Wrapper>
		</GridPageContainer>
	);
};

const IconWrapper = styled.div`
	width: 6em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-inline: auto;
	/* position: absolute;
	top: -1.6em;
	left: -1em; */
	color: ${colors["teal-500"]};
`;

const Wrapper = styled.div`
	display: grid;
	gap: 1em;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	align-items: start;
	margin-inline: auto;
	.Header {
		text-align: center;
		color: ${colors["black"]};
	}
`;

const GridPageContainer = styled(PageContainer)`
	min-height: 100vh;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr;
`;

export default CategoryPage;
