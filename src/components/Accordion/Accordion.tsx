import React from 'react';


const Accordion = (props) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}


const AccordionTitle = (props) => {
    console.log("AccordingTitle rendering")
    return (
        <h3>{ props.title }</h3>
    )

}

const AccordionBody = () => {
    console.log("AccordingBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
