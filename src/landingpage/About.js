import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContext';
import { Link } from "react-router-dom";
import Header from './Header';
import Swal from 'sweetalert2'

export default function About() {

    const { Caracters, Id, Profile } = useContext(MainContext);

    const [Comics, setComics] = useState(false);
    const [Stories, setStories] = useState(false);
    const [Events, setEvents] = useState(false);
    const [Series, setSeries] = useState(false);
    const [Togglecomics, setTogglecomics] = useState(false);
    const [Togglestories, setTogglestories] = useState(false);
    const [Toggleevents, setToggleevents] = useState(false);
    const [Toggleseries, setToggleseries] = useState(false);
    // const [Style, setStyle] = useState(false);

    useEffect(() => {
        // console.log(Caracters)
        // Caracters.map(item => {
        //     if (item.id === Id) {
        //         setProfile(item)
        //     }
        //     return item
        // })
        console.log(Profile);
        
    }, [0])

    return (
        //style={{backgroundImage:`${Profile.thumbnail.path}/landscape_incredible.jpg`}}
        <div className='about-main-container'>
            <Link to="/">
                <Header />
            </Link>

            <h1>{Profile.name} </h1>
            
            <div className='image-container'>
                
                {Profile.thumbnail && <img src={Profile.thumbnail.path + "/portrait_incredible.jpg"} />}
                
                <div className='description'>
                    <h3>Description</h3>
                    <p>{Profile.description} </p>
                </div>
            </div>

            <div
                className='about-container'
                style={{
                    justifyContent: 'center',
                    // backgroundImage: `url("${Profile.thumbnail.path + "/portrait_incredible.jpg"}")`,
                }} >


                <div onClick={() =>{ 
                    setComics(!Comics) 
                    // setTogglecomics(!Togglecomics)
                    Swal.fire(
                        'Comics',
                        `${Profile.comics.items.map(item => {
                            return (
                                
                                item.name
                                
                            );
                        })}`,
                        
                      )
                }
                    
                    }
                    className={Togglecomics ? 'about-pop' : 'plus-about '}>
                    <h3 >Comics</h3>
                    {Comics && Profile.comics.items.map(item => {
                        return (
                            
                            <p key={item.id}>{item.name}</p>
                            
                        );
                    })}
                </div>

                <div onClick={() =>{ 
                    setStories(!Stories)
                    setTogglestories(!Togglestories)}
                    }
                     className={Togglestories ? 'about-pop' : 'plus-about '}>
                    <h3 >Stories</h3>
                    {Stories && Profile.stories.items.map(item => {
                        return (
                            <p key={item.id}>{item.name}</p>
                        );
                    })}
                </div>

                <div onClick={() =>{ 
                    setEvents(!Events) 
                    setToggleevents(!Toggleevents)}
                    }
                    className={Toggleevents ? 'about-pop' : 'plus-about '}>
                    <h3 >Events</h3>
                    {Events && Profile.events.items.map(item => {
                        return (
                            <p key={item.id}>{item.name}</p>
                        );
                    })}
                </div>

                <div onClick={() => {
                    setSeries(!Series) 
                    setToggleseries(!Toggleseries)
                    }} 
                    className={Toggleseries ? 'about-pop' : 'plus-about '}>

                    <h3 >Series</h3>

                    {Series && Profile.series.items.map(item => {
                        return (
                            <p key={item.id}>{item.name}</p>
                        );
                    })}
                </div>

            </div>

        </div >
    )


}
