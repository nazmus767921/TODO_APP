import { styled } from "styled-components";
import backgroundImage from "../assets/taskCategoryBg1.jpeg";
import backgroundImage2 from "../assets/taskCategoryBg2.jpg";
import backgroundImage3 from "../assets/taskCategoryBg3.jpg";

const backgroundImages = [backgroundImage, backgroundImage2, backgroundImage3];
const randomBgIndex = Math.floor(Math.random() * backgroundImages.length);

const CategoryCard = () => {
	return (
		<Wrapper>
			<AmountWrapper>
				<Vector />
				<Amount>
					<h1>10</h1>
					<h4>Tasks</h4>
				</Amount>
			</AmountWrapper>
			<Title>
				<h5 className="text_small">Development</h5>
			</Title>
		</Wrapper>
	);
};

const Title = styled.div`
	background-color: white;
	border-radius: 0 20px 20px 0;
	padding: 0.25em 0.5em;
	position: relative;
	left: -1em;
	h5 {
		font-weight: 900;
	}
`;

const Vector = styled.div`
	width: 270%;
	height: 200%;
	background-color: black;
	position: absolute;
	top: -70%;
	right: -100%;
	border-radius: 100%;
	filter: drop-shadow(-2px 5px 4px #000000);
`;

const Amount = styled.div`
	position: relative;
	z-index: 10;
`;

const AmountWrapper = styled.div`
	align-self: flex-end;
	position: relative;
	width: fit-content;
	color: white;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	gap: 4em;
	padding: 1.25em 1em;
	background-image: url(${backgroundImages[randomBgIndex]});
	background-size: cover;
	background-position: center;
	border-radius: 1em;
	overflow: hidden;
`;

export default CategoryCard;
