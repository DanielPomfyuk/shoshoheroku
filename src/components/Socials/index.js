import React from 'react'
import {Networks,Netbox,Icon,FooterContainer,InfoContainer, InfoBox, Title,Info} from "./SocialElements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faViber } from '@fortawesome/free-brands-svg-icons'
import{faPhoneSquare} from '@fortawesome/free-solid-svg-icons'

function Socials() {

    return (
        <>
        <FooterContainer >
            <InfoContainer>
                <InfoBox>
                    <Title>Франчайзинг</Title>
                    <Info>Specifies that text is justified by adjusting the spacing between words, effectively creating additional word spacing. This is effectively a variation of the word-spacing property.</Info>
                </InfoBox>
                <InfoBox>
                    <Title>Замовити гру на свій EVENT</Title>
                    <Info>Specifies that text is justified by adjusting the spacing between words, effectively creating additional word spacing. This is effectively a variation of the word-spacing property.</Info>
                </InfoBox>
                <Networks id="contacts">
                <Netbox>
                    <Icon href="https://www.facebook.com/ShoShowGame"><FontAwesomeIcon icon={faFacebook} /></Icon>
                    <Icon href="https://www.instagram.com/sho_sho_show_ua/"><FontAwesomeIcon icon={faInstagram} /></Icon>
                    <Icon href="/"><FontAwesomeIcon icon={faViber} /></Icon>
                    <Icon href="tel:+380660032838"><FontAwesomeIcon icon={faPhoneSquare} /></Icon>
                </Netbox>
            </Networks>
            </InfoContainer>
        </FooterContainer>
        </>
    )
}

export default Socials
