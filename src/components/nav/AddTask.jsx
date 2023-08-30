import { styled } from "styled-components";
import { MdAddCircle } from "react-icons/md";
import { ease } from "../../styles/animations";
import { colors } from "../../styles/colors";
import { devices } from "../../styles/devices";

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
			<h2>My Task</h2>
			<Button>
				<IconWrapper />
			</Button>
		</Wrapper>
	);
};

export default AddTask;
