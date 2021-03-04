import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    Container, Text, Button,
} from './styles';
import EditListScreen from '../EditListScreen';

export default () =>{
    const navigation = useNavigation();
    return(
        <Container>
            <Text>Tela de Listagem</Text>
            <Button title='Ir pra editar' onPress={()=> navigation.navigate('EditNote')} />
        </Container>
    );
}
