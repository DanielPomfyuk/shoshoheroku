import React from 'react'
import{Container,Form,Input,Title,Select,SelectContainer,SelectTitle,SubmitButton,ButtonContainer} from './RegistrationElements'
function RegistrationForm() {
    return (<>
    <Container id="registration">
        <Form>
            <Title>Registartion</Title>
            <Input placeholder="Назва команди"/>
            <Input placeholder="Номер телефону"/>
            <SelectContainer>
                <SelectTitle>Кількість учасників:</SelectTitle>
            <Select>
                <option value="1" hidden>2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">6</option>
                <option value="6">7</option>
                <option value="7">8</option>
            </Select>
            </SelectContainer>
            <ButtonContainer>

            <SubmitButton>
            Lets go!
            </SubmitButton>
            </ButtonContainer>
        </Form>
    </Container>
    </>)
}

export default RegistrationForm
