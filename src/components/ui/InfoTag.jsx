import { styled } from "styled-components";

const InfoTag = ({ children }) => {
	return <P>{children}</P>;
};

const P = styled.p`
	font-size: 1.25em;
	opacity: 0.3;
	margin: 4em auto;
	text-align: center;
`;

export default InfoTag;
