import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
background-color:#333;
`;

export const Text = styled.Text``;

export const  TitleInput = styled.TextInput`
font-size:20px;
font-weight:bold;
padding:15px;
color:#FFF;
`;

export const  BodyInput = styled.TextInput`
flex:1;
padding:15px;
font-size:15px;
color: #FFF;
`;

export const SaveButton = styled.TouchableHighlight`
margin-right:25px;
`;

export const SaveButtonImage = styled.Image`
width:25px;
height:25px;
`;

export const CloseButton = styled.TouchableHighlight`
margin-left:25px;
`;

export const CloseButtonImage = styled.Image`
width:22px;
height:22px;
`;
