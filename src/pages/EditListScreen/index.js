import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container, Text,
    TitleInput, BodyInput,
    SaveButton, SaveButtonImage,
    CloseButton, CloseButtonImage
} from './styles';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatuts] = useState('new');


    useEffect(() => {
        if (route.params?.key != undefined && list[route.params.key]) {
            setStatuts('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
        }
    }, []);



    const handleSaveButton = () => {
        if (title == '' || body == '') {
            alert('Title and description is empty!')
        } else {
            if (status == 'edit') {
                dispatch({
                    type: 'EDIT_NOTE',
                    payload: {
                        key: route.params.key,
                        title, body
                    }
                });
            } else {
                dispatch({
                    type: 'ADD_NOTE',
                    payload: { title, body }
                });
            }
            navigation.goBack();
        }
    }

    const handleCloseButton = () => {
        navigation.goBack();
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status == 'new' ? 'New Note' : 'Edit Note',
            headerLeft: () => (
                <CloseButton underlayColor='transparent' onPress={handleCloseButton}>
                    <CloseButtonImage source={require('../../assets/close.png')} />
                </CloseButton>
            ),
            headerRight: () => (
                <SaveButton underlayColor='transparent' onPress={handleSaveButton}>
                    <SaveButtonImage source={require('../../assets/save.png')} />
                </SaveButton>
            )
        })
    }, [status, title, body]);


    return (
        <Container>
            <TitleInput placeholder="Note title"
                placeholderTextColor='#CCC'
                value={title}
                onChangeText={t => setTitle(t)}
                autoFocus={true}
            />
            <BodyInput
                placeholder="Note text"
                placeholderTextColor='#CCC'
                multiline={true}
                textAlignVertical='top'
                value={body}
                onChangeText={t => setBody(t)}
            />
        </Container>
    );
}
