import NavUser from "../../components/nav/NavUser";
import { HR } from "../../components/ui/styled_elements";
import { PageContainer } from "../../styles/layout";
import AddTask from "../../components/nav/AddTask";
import FilterMenu from "../../features/filter/FilterMenu";
import { styled } from "styled-components";
import { devices } from "../../styles/devices";
import CategoryShowcase from "../../features/category/CategoryShowcase";
import TaskLists from "../../features/task/task_lists/TaskLists";

const Homepage = () => {
	return (
		<PageContainer>
			<NavUser />
			<HR height="2px" style={{ marginBlock: "2em", borderRadius: "9999px" }} />
			<TaskAndFilterWrapper>
				<AddTask />
				<FilterMenu />
			</TaskAndFilterWrapper>
			<CategoryShowcase />
			<TaskLists />
		</PageContainer>
	);
};

const TaskAndFilterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (${devices.md}) {
		flex-direction: row-reverse;
		gap: 10em;
	}
	@media only screen and (${devices["xl"]}) {
		justify-content: space-between;
	}
`;

export default Homepage;
