import axios from 'axios'
import md5 from 'md5';

const publicKey = "a5a4cf7ed033c0ede02a7ebc64639c70";
const privateKey = "137302d75f04aa04868bbea4642c38dcb9469231";
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/",
    params: {
        ts,
        apiKey: publicKey,
        hash,
    },
})

export default api;