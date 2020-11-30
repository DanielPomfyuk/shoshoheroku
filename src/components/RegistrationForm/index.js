import React from 'react'
import{Container,Form,Input,Title,Select,SelectContainer,SelectTitle,SubmitButton,ButtonContainer,FormContainer,Svg} from './RegistrationElements'
function RegistrationForm() {
    return (<>
    <Container id="registration">
        <FormContainer>

        <Form>
            <Title>Registration</Title>
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
        <Svg viewBox="10 50 30 50">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#12B6E2"></path>
              </g>
          </Svg>
        </FormContainer>
    </Container>
    </>)
}

export default RegistrationForm
