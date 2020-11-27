import React from 'react'
import {Networks,Netbox,Icon} from "./SocialElements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faViber } from '@fortawesome/free-brands-svg-icons'
import{faPhoneSquare} from '@fortawesome/free-solid-svg-icons'

function Socials() {

    return (
        <>
            <Networks id="contacts">
                <Netbox>
                    <Icon><FontAwesomeIcon icon={faFacebook} /></Icon>
                    <Icon><FontAwesomeIcon icon={faInstagram} /></Icon>
                    <Icon><FontAwesomeIcon icon={faViber} /></Icon>
                    <Icon><FontAwesomeIcon icon={faPhoneSquare} /></Icon>
                </Netbox>
            </Networks>
        </>
    )
}

export default Socials
