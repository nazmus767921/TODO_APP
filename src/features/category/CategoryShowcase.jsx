import { styled } from "styled-components";
import CategoryCard from "./components/CategoryCard";
import { devices } from "../../styles/devices";

const CategoryShowcase = () => {
	return (
		<Wrapper>
			<CategoryCard />
			<CategoryCard />
			<CategoryCard />
			<CategoryCard />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	gap: 1em;
	@media only screen and (${devices.md}) {
		gap: 1.75em;
	}
`;

export default CategoryShowcase;
