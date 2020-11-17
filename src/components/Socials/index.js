import React from 'react'
import {Networks,Netbox,Icon} from "./SocialElements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTelegram,faGoogle } from '@fortawesome/free-brands-svg-icons'
import{faPhone} from '@fortawesome/free-solid-svg-icons'

function Socials() {

    return (
        <>
            <Networks>
                <Netbox>
                    <Icon><FontAwesomeIcon icon={faFacebookF} /></Icon>
                    <Icon><FontAwesomeIcon icon={faInstagram} /></Icon>
                    <Icon><FontAwesomeIcon icon={faTelegram} /></Icon>
                    <Icon><FontAwesomeIcon icon={faPhone} /></Icon>
                </Netbox>
            </Networks>
        </>
    )
}

export default Socials
