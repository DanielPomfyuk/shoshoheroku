import React from 'react'
import { MainContainer, Reflection, Wall ,Image,Frame,Row} from './PhotoElements';
import images from "./images"


function PhotoGallery() {
const NUM_IMAGES = images.length;
console.log(NUM_IMAGES)
const IMAGES = [[],[],[]]
for(let i = 0; i < NUM_IMAGES; i++) {
    if(i<(NUM_IMAGES/3)){
        IMAGES[0].push(<Image src={images[i].name}/>);
    }
    else if(i<(NUM_IMAGES/3*2)){
        IMAGES[1].push(<Image src={images[i].name}/>);
    }
    else{
        IMAGES[2].push(<Frame>
            <Image src={images[i].name}/>
            <Reflection>
            <Image src={images[i].name}/>
            </Reflection>
            </Frame>)
    }
}
    return (
        <MainContainer id="photo">
            <Wall>
    <Row>{IMAGES[0]}</Row>
    <Row>{IMAGES[1]}</Row>
    <Row>{IMAGES[2]}</Row>
            </Wall>
        </MainContainer>
    )
}

export default PhotoGallery
