import { styled } from "styled-components";
import { MdAddCircle } from "react-icons/md";
import { ease } from "../../styles/animations";
import { colors } from "../../styles/colors";
import { devices } from "../../styles/devices";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 2em;
	@media only screen and (${devices.md}) {
		flex-shrink: 0;
	}
`;

const IconWrapper = styled(MdAddCircle)`
	width: 100%;
	height: 100%;
	transition: all 0.25s ${ease["out-expo"]};
`;
const Button = styled.button`
	display: flex;
	width: 3em;
	&:hover,
	:active {
		${IconWrapper} {
			color: ${colors["teal-500"]};
		}
	}
`;

const AddTask = () => {
	return (
		<Wrapper>
			<h2>Your Tasks</h2>
			<Link to={`/create-task`}>
				<Button>
					<IconWrapper />
				</Button>
			</Link>
		</Wrapper>
	);
};

export default AddTask;
