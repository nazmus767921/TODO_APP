import { styled } from "styled-components";
import { colors } from "../../../../styles/colors";
import { MdCategory } from "react-icons/md";
import { iconFit } from "../../../../styles/styleObject";

const TaskCard = () => {
	return (
		<Wrapper>
			<Category>
				<IconWrapper>
					<MdCategory style={iconFit} />
				</IconWrapper>
				<h4 className="text_small">Development</h4>
			</Category>
			<Info>
				<h4>Do This Shit</h4>
				<p className="text_small">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non cupi
					ex.
				</p>
			</Info>
		</Wrapper>
	);
};

const Info = styled.div`
	padding: 1.25em 2em 1.25em 0;
	text-align: right;
	width: 100%;
`;

const IconWrapper = styled.div`
	width: 2em;
	aspect-ratio: 1;
`;

const Category = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${colors["blue-500"]};
	color: white;
	padding: 2em 1em;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 1em;
	width: 100%;
	background-color: white;
	filter: drop-shadow(2px 0px 5px #d9d9d9);
	border-radius: 0.75em;
	overflow: hidden;
`;

export default TaskCard;
