import React from 'react';

const Display = props => {


    return (
        <div className='display'>
            <span className='numbers'>{props.currentUser + 1}/{props.userInfo.length} </span>
            <section className='name'>
                <h2>{props.userInfo[props.currentUser].name.first} {props.userInfo[props.currentUser].name.last}</h2>
            </section>
            <section className='personal-info'>
                <p>From: <span>{props.userInfo[props.currentUser].city}, {props.userInfo[props.currentUser].country}</span></p>
                <p>Job Title: <span>{props.userInfo[props.currentUser].title}</span></p>
                <p>Employer: <span>{props.userInfo[props.currentUser].employer}</span></p>
            </section>
            <section className='movies'>
                <ol>Favorite Movies: 
                    <li>{props.userInfo[props.currentUser].favoriteMovies[0]} </li>
                    <li>{props.userInfo[props.currentUser].favoriteMovies[1]} </li>
                    <li>{props.userInfo[props.currentUser].favoriteMovies[2]} </li>
                </ol>
            </section>            
        </div>
    )
}

export default Display;