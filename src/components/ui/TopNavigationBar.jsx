import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { iconFit } from "../../styles/styleObject";

const TopNavigationBar = () => {
	return (
		<TopBar id="top_bar">
			<Link to={`/`}>
				<BackHomeButton>
					<IoIosArrowBack style={iconFit} />
				</BackHomeButton>
			</Link>
		</TopBar>
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

export default TopNavigationBar;
