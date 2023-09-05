import { styled } from "styled-components";
import { PageContainer } from "../../styles/layout";
import TopNavigationBar from "../../components/ui/TopNavigationBar";
import { colors } from "../../styles/colors";
import TaskLists from "../../features/task/task_lists/TaskLists";
import { HR } from "../../components/ui/styled_elements";
import { iconFit } from "../../styles/styleObject";
import { CgQuote } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../../features/task/contexts/task_context";

const CategoryPage = () => {
	const { category } = useParams();
	const { categories, list } = useTaskContext();
	const { tasksAssigned } = categories.find(
		(c) => c.categoryName.toLowerCase() === category.toLowerCase()
	);

	//=> DATA IN SPECIFIC CATEGORY <==//
	const dataInThisCategory = list.filter((task) => {
		return task.category === category;
	});

	return (
		<GridPageContainer>
			<TopNavigationBar />
			{tasksAssigned < 1 ? (
				<FlexCenter>
					<div style={{ position: "relative" }}>
						<IconWrapper>
							<CgQuote style={iconFit} />
						</IconWrapper>
						<h2 className="header">No Tasks Assigned to {category}</h2>
					</div>
				</FlexCenter>
			) : (
				<Wrapper>
					<div>
						<div style={{ position: "relative" }}>
							<IconWrapper>
								<CgQuote style={iconFit} />
							</IconWrapper>
							<h2 className="Header">
								You have {tasksAssigned} {category} tasks to complete
							</h2>
						</div>
						<HR
							height="2px"
							style={{ marginBlock: "2em", borderRadius: "9999px" }}
						/>
					</div>
					<TaskLists data={dataInThisCategory} />
				</Wrapper>
			)}
		</GridPageContainer>
	);
};

const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.header {
		text-align: center;
		color: ${colors["black"]};
	}
`;

const IconWrapper = styled.div`
	width: 6em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-inline: auto;
	color: ${colors["teal-500"]};
`;

const Wrapper = styled.div`
	display: grid;
	gap: 1em;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	align-items: start;
	margin-inline: auto;
`;

const GridPageContainer = styled(PageContainer)`
	min-height: 100vh;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr;
`;

export default CategoryPage;
