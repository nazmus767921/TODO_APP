import { styled } from "styled-components";
import { colors } from "../../../styles/colors";
import { ease } from "../../../styles/animations";

const FilterButton = ({ children }) => {
	const handleIsActive = () => {
		return false;
	};
	return (
		<Button isActive={handleIsActive()}>
			<SelectionDot isActive={handleIsActive()} />
			{children}
		</Button>
	);
};

const SelectionDot = styled.div`
	width: 0.45rem;
	height: 0.45rem;
	background-color: ${colors["teal-500"]};
	border-radius: 100%;
	position: absolute;
	top: 105%;
	left: 47%;
	opacity: ${(props) => (props.isActive ? "1" : "0")};
`;

const Button = styled.button`
	display: flex;
	position: relative;
	font-size: 0.9rem;
	font-weight: 700;
	text-transform: capitalize;
	color: ${(props) => (props.isActive ? colors["teal-500"] : "#ddd")};
	transition: all 0.35s ${ease["out-expo"]};
	&:hover {
		color: ${colors["teal-500"]};
	}
`;

export default FilterButton;
