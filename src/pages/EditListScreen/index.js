import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
    Container, Text,
    TitleInput, BodyInput
} from './styles';

export default () =>{

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatuts] = useState('new');

    useEffect(()=>{
        if(route.params?.key != undefined && list[route.params.key]){
            setStatuts('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
        }    
    },[]);

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
