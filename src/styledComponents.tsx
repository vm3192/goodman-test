import styled from "styled-components";

export const AppWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	padding: 15px;

	@media(max-width: 576px) {
		flex-direction: column-reverse;
		height: 100%;
	}
`;

export const List = styled.ul`
	display: inline-block;
	border-radius: 10px;
	background-color: #fff;
	list-style: none;
	overflow: hidden;

	@media(max-width: 576px) {
		max-width: 290px;
	}
`;

export const ListItem = styled.li`
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: default;

	&:not(:last-child) {
		border-bottom: 1px solid #eaeaea;
		padding: 10px 20px;
	}

	&:hover {
		background-color: #024bff;
		color: #fff;
	}
`;

export const FileUpload = styled.input`
	width: 100%;
	padding: 10px 20px;
	opacity: 0;

	position: relative;
	z-index: 2;
`;

export const UploadInscription = styled.p`
	position: absolute;
	top: 0;
	left: 0;
	padding: 10px 20px;
`

export const Preview = styled.div`
	height: 100%;
	flex: 1 1 auto;

	@media(max-width: 576px) {
		width: 100%;
	}
`