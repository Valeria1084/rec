import React from "react";
function Characters(props){
    let {id,name,status,species,gender,image} = props
    return(
        <div className={'char'}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h4>{species}</h4>
            <h5>{gender}</h5>
            <img src={image} alt=""/>
        </div>
    )
}
export default Characters