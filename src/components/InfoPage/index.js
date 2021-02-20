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
import icon1 from "./icon-1.png"
import icon2 from "./icon-2.png"
import icon3 from "./icon-3.png"
import icon4 from "./icon-4.png"
import icon5 from "./icon-5.png"
import icon6 from "./icon-6.png"
import icon7 from "./icon-7.png"
import icon8 from "./icon-8.png"
const InfoSection = () => {
    return (
        <InfoWrapper id="info">
            <Container>
                {/* <TextWrapper>
                    <TextTitle>SHO?ШО?SHOW! - SHO ЦЕ ТАКЕ?</TextTitle>
                    <Text>{text}</Text>
                </TextWrapper> */}
                {/* <IconsContainer> */}
                    <Icon src={icon7}/>
                    <Icon src={icon1}/>
                    <Icon src={icon2}/>
                    <Icon src={icon3}/>
                    <Icon src={icon8}/>
                    <Icon src={icon4}/>
                    <Icon src={icon5}/>
                    <Icon src={icon6}/>
                {/* </IconsContainer> */}
            </Container>
        </InfoWrapper>
    )
}

export default InfoSection
