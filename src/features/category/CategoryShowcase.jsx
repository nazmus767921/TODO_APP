import { styled } from "styled-components";
import CategoryCard from "./components/CategoryCard";
import { devices } from "../../styles/devices";
import { motion } from "framer-motion";
import { useRef } from "react";

const CategoryShowcase = () => {
	const constraintsRef = useRef(null);
	return (
		<Section ref={constraintsRef}>
			<Wrapper drag="x" dragConstraints={constraintsRef}>
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
			</Wrapper>
		</Section>
	);
};

const Wrapper = styled(motion.div)`
	width: fit-content;
	min-width: 100%;
	display: flex;
	gap: 1em;
	padding: 0 10%;
	@media only screen and (${devices.md}) {
		gap: 1.75em;
	}
`;

const Section = styled(motion.div)`
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	overflow: hidden;
`;

export default CategoryShowcase;
