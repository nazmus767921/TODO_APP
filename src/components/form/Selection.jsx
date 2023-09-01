import { styled } from "styled-components";
import { colors } from "../../styles/colors";

const Selection = ({ value, label, onChange }) => {
	return (
		<Wrapper id={label}>
			<label htmlFor="category">{label}</label>
			<Select name="category" id="category" value={value} onChange={onChange}>
				<option value="development">development</option>
				<option value="design">design</option>
			</Select>
		</Wrapper>
	);
};

const Select = styled.select`
	font-size: 1.5em;
	text-align: center;
	font-weight: 900;
	text-transform: capitalize;
	padding: 0.5em 1em;
	border-radius: 0.75em;
	border: 2px solid ${colors["teal-500"]};
	width: 100%;
	-webkit-appearance: none;
	-moz-appearance: none;

	option {
		display: flex;
		flex-direction: column;
		gap: 30px;
		background-color: cornsilk;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	align-items: center;
	margin-block: 0.75em;
	label {
		font-size: 1.25em;
		text-transform: capitalize;
		font-weight: 900;
		color: ${colors["teal-500"]};
	}
`;

export default Selection;
