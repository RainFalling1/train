import React, {useState, useEffect} from "react";
import "./CSS.css";

const PopularCard = (props) => {
    const i = props.item;
    const index = props.index;

    useEffect(() => {


    }, []);

    const formatName = (str) =>{
        if (str.length > 10){
            return str.substr(0, 10) + "..."
        }else {
            return str
        }
    };

    return (
        <a className={"itemCard"} key={i.id} href={i.owner.html_url}>
            <h2>{"#" + (parseInt(index)+1)}</h2>
            <img
                src={i.owner.avatar_url}
                style={{
                    width: '150px', height: '150px', display: 'block', margin: '0 auto', borderRadius: '3px', marginBottom: '8px',
                }}
            />
            <h2 style={{ textAlign: 'center', margin: '30px 0' }}>
                <label style={{ color: 'rgb(187, 46, 31)', fontWeight: 'bold', textDecoration: 'none' }}>{formatName(i.name)}</label>
            </h2>
            {i.name}
        </a>
    )
};


export default PopularCard;
