import { styled } from "styled-components";
import FilterButton from "./components/FilterButton";
import { colors } from "../../styles/colors";
import { devices } from "../../styles/devices";

const filter_names = ["recently", "today", "upcoming", "later"];

const FilterMenu = () => {
	return (
		<Wrapper>
			{filter_names.map((name, index) => (
				<FilterButton key={index}>{name}</FilterButton>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 0.75em;
	margin-block: 2.5em;
	padding: 0.2em 0.5em;
	border-radius: 999px;
	@media only screen and (${devices.md}) {
		border: 2px solid ${colors.black}20;
	}
	@media only screen and (${devices["xl"]}) {
		width: 50%;
	}
`;

export default FilterMenu;
