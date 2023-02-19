import React from 'react';



const Star = (props) => {
    if (props.value === 1) {
        return (
            <div>
                <Star2 selected={true}/>
                <Star2 selected={false}/>
                <Star2 selected={false}/>
                <Star2 selected={false}/>
                <Star2 selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={false}/>
                <Star2 selected={false}/>
                <Star2 selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={false}/>
                <Star2 selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {
        return (
            <div>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
                <Star2 selected={true}/>
            </div>
        );
    }

    return (
        <div>
            <Star2 selected={false}/>
            <Star2 selected={false}/>
            <Star2 selected={false}/>
            <Star2 selected={false}/>
            <Star2 selected={false}/>
        </div>
    );
}

const Star2 = (props) => {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }



}
export default Star;