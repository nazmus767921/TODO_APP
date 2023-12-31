import { styled } from "styled-components";
import CategoryCard from "./components/CategoryCard";
import { devices } from "../../styles/devices";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../task/contexts/task_context";

const CategoryShowcase = () => {
	const constraintsRef = useRef(null);
	const { categories } = useTaskContext();
	return (
		<Section ref={constraintsRef}>
			<Wrapper drag="x" dragConstraints={constraintsRef}>
				{categories.map((category) => {
					return (
						<Link to={`categories/${category.categoryName}`} key={category.id}>
							<CategoryCard {...category} />
						</Link>
					);
				})}
			</Wrapper>
		</Section>
	);
};

const Wrapper = styled(motion.div)`
	width: fit-content;
	min-width: 100%;
	display: flex;
	gap: 1em;
	padding: 0 5%;
	@media only screen and (${devices.md}) {
		padding: 0 10%;
		gap: 1.75em;
	}
	@media only screen and (${devices["2xl"]}) {
		padding: 0 15%;
	}
`;

const Section = styled(motion.div)`
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	overflow: hidden;
`;

export default CategoryShowcase;
