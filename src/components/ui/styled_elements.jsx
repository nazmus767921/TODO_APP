import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const HR = styled.div`
	height: ${(props) => props.height};
	background-color: ${colors["teal-500"]};
`;
