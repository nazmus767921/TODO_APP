import { styled } from "styled-components";
import { one_liners } from "../data/daily_one_liners";
import { CgQuote } from "react-icons/cg";
import { colors } from "../../../../styles/colors";
import { iconFit } from "../../../../styles/styleObject";

const OneLinerTitle = () => {
	const randomIndex = Math.floor(Math.random() * one_liners.length);
	return (
		<Wrapper>
			<IconWrapper>
				<CgQuote style={iconFit} />
			</IconWrapper>
			<Title>{one_liners[randomIndex]}</Title>
			<h5>Lets Start</h5>
		</Wrapper>
	);
};

const Title = styled.h2`
	margin-top: -1em;
`;

const IconWrapper = styled.div`
	width: 6em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-inline: auto;
	color: ${colors["teal-500"]};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.35em;
	justify-content: center;
	text-align: center;
	margin-block: 2em;
	h5 {
		font-weight: 700;
		opacity: 0.5;
	}
`;

export default OneLinerTitle;
