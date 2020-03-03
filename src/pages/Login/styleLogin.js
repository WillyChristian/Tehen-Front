import Styled from 'styled-components';

export const Form = Styled.form`
width: 460px;
height: 460px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-image: linear-gradient(#4A778C 5%,#2F4F63 30%,#282c34 98%);
padding: 80px 40px;
margin: 2rem auto;
border-radius: 10px;
& h1 {
	color: #f1f1f1;
	text-align: center;
	margin-bottom: 120px;
}
}`;

export const User = Styled.div`
.text-user{
	border-bottom: 2px solid #adadad;
	position: relative;
	margin: 30px;
}& input{
	font-size: 20px;
	color: #ddd;
	border: none;
	width: 100%;
	background: none;
	padding: 0 5px ;
	height: 40px;
	outline: none;
}
`;
export const Pass = Styled.div`
.text-pass{
	border-bottom: 2px solid #adadad;
	position: relative;
	margin: 30px;
}& input{
	font-size: 20px;
	color: #f1f1f1;
	border: none;
	width: 100%;
	background: none;
	padding: 0 5px ;
	height: 40px;
	outline: none;
}`;

export const BtnContainer = Styled.div`
	margin-bottom: 50px;
	& button{
		width: 100px;
		height: 30px;
		background-color: #4A778C;
		color: #ddd;
		border-radius: 6px;
		cursor: pointer;
	}
`;
