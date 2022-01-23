import styled from "styled-components";

const Container = styled.div`
	height: 30px;
	background-color: gray;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: bold;
`;

const Announcement = () => {
	return (
		<Container>
			Today's Special! 20% Overall Discount On Orders Above $500
		</Container>
	);
};

export default Announcement;
