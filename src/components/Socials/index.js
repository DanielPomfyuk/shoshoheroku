import React from 'react'
import {Networks,Netbox,Icon,Footer,Container, InfoBox, Title,Info,InfoWrapper} from "./SocialElements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faViber } from '@fortawesome/free-brands-svg-icons'
import{faPhoneSquare} from '@fortawesome/free-solid-svg-icons'

function Socials() {
    let eventText,franchisingText; 
    eventText = franchisingText = "Колись Свергун скине текст який він хоче тут бачити і тут шось буде написано.А поки,тут буде заглушка і смішних слів: піська попки пук какашка залупка подмишка машонка трясця його матері А щоби пуп той вилисів, як від маку ступа… падлюка покидьок шмаркатий, шмаркач (1. Такий, у якого тече слиз із носа; зі шмарклями під носом. 2. перен., зневажл."
    let infoText = "Sho? Шо? Show!  - це інтелектуально-розважальне шоу на логіку і кмітливість.Участь беруть команди, складом від 2 до 8 осіб.Гра складається з декількох раундів: TXT, JPEG, RANDOM, MP3, CASINO та інших.У Sho?Шо?Show! можна грати з друзями, родиною, колегами, ми не маємо жодних вікових обмежень, єдине, що вам потрібно - це бажання провести свій вечір весело та пізнавально"
    return (
        <>
        <Footer >
            <Container>
                <InfoWrapper>
                <InfoBox>
                    <Title>Франчайзинг</Title>
                    <Info>{franchisingText}</Info>
                </InfoBox>
                <InfoBox>
                    <Title>Замовити гру на свій EVENT</Title>
                    <Info>{eventText}</Info>
                </InfoBox>
                <InfoBox>
                    <Title>SHO?ШО?SHOW!-SHO ЦЕ ТАКЕ?</Title>
                    <Info>{infoText}</Info>
                </InfoBox>
                </InfoWrapper>
                <Networks id="contacts">
                <Netbox id="contacts">
                    <Icon href="https://www.facebook.com/ShoShowGame"><FontAwesomeIcon icon={faFacebook} /></Icon>
                    <Icon href="https://www.instagram.com/sho_sho_show_ua/"><FontAwesomeIcon icon={faInstagram} /></Icon>
                    <Icon href="/"><FontAwesomeIcon icon={faViber} /></Icon>
                    <Icon href="tel:+380660032838"><FontAwesomeIcon icon={faPhoneSquare} /></Icon>
                </Netbox>
            </Networks>
            </Container>
        </Footer>
        </>
    )
}

export default Socials
