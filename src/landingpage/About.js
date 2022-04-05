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

            <div className='about-container'>

                <div onClick={() => {
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
                    className='plus-about'>
                    <h3 >Comics</h3>
                   
                </div>

                <div onClick={() => {
                    
                    setTogglestories(!Togglestories)
                    Swal.fire(
                        'Stories',
                        `${Profile.comics.items.map(item => {
                            return (
                                item.name
                            );
                        })}`,
                    )
                }
                }
                     className='plus-about'>
                    <h3 >Stories</h3>
                    
                </div>

                <div onClick={() => {
                    Swal.fire(
                        'Events',
                        `${Profile.comics.items.map(item => {
                            return (
                                item.name
                            );
                        })}`,
                    )
                }
                }
                    className='plus-about'>
                    <h3 >Events</h3>
                    
                </div>

                <div onClick={() => {
                    Swal.fire(
                        'Series',
                        `${Profile.comics.items.map(item => {
                            return (
                                item.name
                            );
                        })}`,
                    )
                }}
                    className='plus-about'>

                    <h3 >Series</h3>
                </div>

            </div>

        </div >
    )


}
