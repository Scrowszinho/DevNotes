import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
    Container, Text, AddButton,
    AddButtonImage
} from './styles';

export default () =>{
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);

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
            
        </Container>
    );
}
