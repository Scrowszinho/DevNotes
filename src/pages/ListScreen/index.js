import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import NoteItem from '../../components/NoteItem';

import {
    Container, Text, AddButton,
    AddButtonImage, NotesList, 
    NoNotes, NoNotesImg, NoNotesText
} from './styles';

export default () =>{
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);
    const handleNotePress = (index) =>{
    navigation.navigate('EditNote',{
    key:index
    });
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Notes',
            headerRight:()=> (
            <AddButton underlayColor='transparent' onPress={()=>navigation.navigate('EditNote')}>
                <AddButtonImage source={require('../../assets/more.png')} />
            </AddButton>
            )
        })
    },[]);

    return(
        <Container>
            { list.length > 0 &&
                <NotesList data={list}
            renderItem={({item,index})=>(
                <NoteItem 
                data={item} index={index}
                onPress={handleNotePress}
                />
                )}
            keyExtractor={(item, index)=>index.toString()}
            />}
            { list.length == 0 &&
            <NoNotes>
                <NoNotesImg source={require('../../assets/note.png')} />
                <NoNotesText>Waiting notes...</NoNotesText>
            </NoNotes>
            }
        </Container>
    );
}
