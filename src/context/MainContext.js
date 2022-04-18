import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import api from "../utils/Api";
import md5 from "md5";
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {

    const [Caracters, setCaracters] = useState([]);
    const [Id, setId] = useState("");
    const [Profile, setProfile] = useState({});
    const [Offset, setOffset] = useState(0)

    useEffect(() => {
        // async function fetch() {
            
        //     await api.get(`/characters?offset=${Offset}`)
        //         .then(response => {
        //             console.log(response);
        //             setCaracters(response.data.data.results);
        //         })
        //         .catch(err => console.log(err));

        // }; fetch();

        async function fetch() {
            const baseURL = "http://gateway.marvel.com/v1/public";
            const publicKey = "a5a4cf7ed033c0ede02a7ebc64639c70";
            const privateKey = "137302d75f04aa04868bbea4642c38dcb9469231";
            const time = Number(new Date());
            const hash = md5(time + privateKey + publicKey);
            try {
                await axios.get(`${baseURL}/characters?offset=${Offset}&ts=${time}&apikey=${publicKey}&hash=${hash}`)
                    .then(response => {
                        setCaracters(response.data.data.results);
                        console.log(response.data.data.results);
                    })
                    .catch(err => console.log(err));

            } catch (error) {
                console.log(error);
            }
        }; fetch();

    }, [Offset]);

    return (
        <MainContext.Provider
            value={{
                Caracters, setCaracters,
                Id, setId,
                Profile, setProfile,
                Offset, setOffset
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export const useMainContext = () => useContext(MainContext);