import { styled } from "styled-components";
import { one_liners } from "../data/daily_one_liners";

const OneLinerTitle = () => {
	const randomIndex = Math.floor(Math.random() * one_liners.length);
	return (
		<Wrapper>
			<Title>{one_liners[randomIndex]}</Title>
			<h5>Lets Start</h5>
		</Wrapper>
	);
};

const Title = styled.h3``;

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
