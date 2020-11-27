import React from 'react'
import {
    InfoWrapper,
    Container,
    Image,
    Text,
    TextWrapper,
    TextTitle,
    Icon,
    ImageWrapper,
    IconsContainer
} from "./InfoElements"
import img from "./icon.png"
const InfoSection = () => {
    let text = "Sho? Шо? Show!  - це інтелектуально-розважальне шоу, під час якого учасники відповідають на різноманітні питання.Це командна гра на логіку і кмітливість, участь беруть команди, складом від 2 до 8 осіб.Наш квіз проходить у затишних пабах та ресторанах де можна, під час гри, смачно поїсти і випити;) Гра складається з декількох раундів: TXT, JPEG, RANDOM, MP3, CASINO та інших, деякі з них схожі на класичні ігри Що?Де?Коли?, але головною відмінністю є раунди, де гравцям треба проявляти свою кмітливість, майже кожну гру додається новий цікавий раунд.У Sho?Шо?Show!  можна грати з друзями, родиною, колегами, ми не маємо жодних вікових обмежень, єдине, що вам потрібно - це бажання провести свій вечір весело та пізнавально"
    return (
        <InfoWrapper id="info">
            <Container>
                <TextWrapper>
                    <TextTitle>SHO?ШО?SHOW! - SHO ЦЕ ТАКЕ?</TextTitle>
                    <Text>{text}</Text>
                </TextWrapper>
                <IconsContainer>
                    <Icon src={img}/>
                    <Icon src={img}/>
                    <Icon src={img}/>
                    <Icon src={img}/>
                    <Icon src={img}/>
                </IconsContainer>
            </Container>
        </InfoWrapper>
    )
}

export default InfoSection
