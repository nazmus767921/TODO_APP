import { styled } from "styled-components";
import UserProfileImage from "./assets/user-dummy-800x789.png";
import { colors } from "../../styles/colors";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 0.75em;
	margin-top: 2.5em;
`;

const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	h1 {
		font-weight: 900;
	}
`;
const Date = styled.h5`
	font-weight: 700;
	color: ${colors["teal-500"]};
`;
const UserProfile = styled.div`
	width: 3.75em;
	aspect-ratio: 1;
	border-radius: 100%;
	overflow: hidden;
`;

const NavUser = () => {
	return (
		<Wrapper>
			<UserInfo>
				<h1>Hi, Nazmus</h1>
				<Date>Monday,1 June</Date>
			</UserInfo>
			<UserProfile>
				<img src={UserProfileImage} alt="name" />
			</UserProfile>
		</Wrapper>
	);
};

export default NavUser;
