import { styled } from "styled-components";
import { devices } from "./devices";

export const PageContainer = styled.section`
	width: 90%;
	margin: 0 auto;
	@media only screen and (${devices.md}) {
		width: 80%;
	}
	@media only screen and (${devices["2xl"]}) {
		width: 70%;
	}
	/* overflow: hidden; */
`;
