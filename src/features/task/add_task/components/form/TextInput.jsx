import { styled } from "styled-components";
import { colors } from "../../../../../styles/colors";

const TextInput = ({
	name = "text",
	type = "text",
	value,
	onChange,
	label = "text field",
}) => {
	return (
		<Wrapper>
			<label htmlFor={name}>{label}</label>
			<Input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	);
};

const Input = styled.input`
	font-size: 1.5em;
	text-align: center;
	font-weight: 900;
	text-transform: capitalize;
	padding: 0.5em 1em;
	border-radius: 0.75em;
	border: 2px solid ${colors["teal-500"]};
`;

const Wrapper = styled.div`
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

export default TextInput;
