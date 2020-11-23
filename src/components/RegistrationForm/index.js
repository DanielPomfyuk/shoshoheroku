import React from 'react'
import{Container,Form,Input,Title} from './RegistrationElements'
function RegistrationForm() {
    return (<>
    <Container>
        <Form>
            <Title>Pеєстрація</Title>
            <Input placeholder="Назва команди"/>
            <Input placeholder="Номер телефону"/>
            <Input placeholder="Кількість учасників"/>
        </Form>
    </Container>
    </>)
}

export default RegistrationForm
