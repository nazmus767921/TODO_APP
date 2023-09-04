import { styled } from "styled-components";
import { IoCheckmarkDone } from "react-icons/io5";
import { iconFit } from "../../../styles/styleObject";
import { colors } from "../../../styles/colors";
import { ease } from "../../../styles/animations";

const ActionButton = () => {
	return (
		<Button type="button">
			<IconWrapper>
				<IoCheckmarkDone style={iconFit} />
			</IconWrapper>
			<h5>Mark as Done</h5>
		</Button>
	);
};

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.5em;
	aspect-ratio: 1;
	margin-block: 0.75em;
`;
const Button = styled.button`
	display: grid;
	gap: 1em;
	width: fit-content;
	margin-inline: auto;
	justify-items: center;
	align-items: center;
	grid-template-columns: auto 1fr;
	grid-column: span 2;
	background-color: ${colors["teal-500"]};
	padding: 0 1em;
	border-radius: 0.5em;
	color: ${colors["white-100"]};
	transition: filter 0.35s ${ease["out-expo"]};
	&:hover,
	:active,
	:focus {
		filter: brightness(0.9);
	}
`;
export default ActionButton;
