import { styled } from "styled-components";
import { colors } from "../../styles/colors";

const TextArea = ({
	name = "textarea",
	type,
	value,
	onChange,
	label = "text area",
}) => {
	return (
		<Wrapper id={name}>
			<label htmlFor={name}>{label}</label>
			<Input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={(e) => {
					onChange(e);
					e.target.style.height = "auto";
					e.target.style.height = `${e.target.scrollHeight}px`;
				}}
			/>
		</Wrapper>
	);
};

const Input = styled.textarea`
	font-size: 1.5em;
	text-align: center;
	font-weight: 900;
	text-transform: capitalize;
	padding: 0.5em 1em;
	border-radius: 0.75em;
	border: 2px solid ${colors["teal-500"]};
	max-width: 100%;
	min-width: 100%;
	min-height: 10ch;
	max-height: 16ch;
	overflow: hidden;
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

export default TextArea;
