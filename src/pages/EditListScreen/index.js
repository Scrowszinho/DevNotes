import React, {useState} from 'react';
import {
    Container, Text,
    TitleInput, BodyInput
} from './styles';

export default () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return(
        <Container>
            <TitleInput placeholder="Note title" 
            placeholderTextColor='#CCC'
            value = {title} 
            onChangeText={t=>setTitle(t)}
            autoFocus={true}
            />
            <BodyInput 
            placeholder="Note text" 
            placeholderTextColor='#CCC'
            multiline={true}
            textAlignVertical='top'
            value = {body} 
            onChangeText={t=>setBody(t)}
            />
        </Container>
    );
}
