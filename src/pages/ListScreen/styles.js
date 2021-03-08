import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color:#333;
flex:1;
justify-content:center;
align-items:center;
`;

export const Text = styled.Text``;

export const AddButton = styled.TouchableHighlight`
margin-right:25;
`;

export const AddButtonImage = styled.Image`
width:23;
height:23;
`;

export const NotesList = styled.FlatList`
flex:1;
width:100%;
`;

export const NoNotes = styled.View`
justify-content:center;
align-items:center;
`; 
export const NoNotesImg = styled.Image`
width:50;
height:50;
`;

export const  NoNotesText = styled.Text`
font-size:17;
color:#FFF;
`;
