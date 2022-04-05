import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../context/MainContext';
import Header from './Header';
var cors = require('cors')
cors();

function Home() {

    const { Caracters, setId, setProfile, Offset, setOffset } = useContext(MainContext);

    async function profile(id) {

        Caracters.map(item => {
            if (item.id === id) {
                setProfile(item)
            }
            return item
        })
    }

    async function offsetplus(){
        setOffset(Offset +20)
        console.log(Offset);
    }
    async function offsetminus(){
        if(Offset === 0){
            setOffset(0)
        }else{
            setOffset(Offset -20)
        }
        console.log(Offset);
    }

    return (
        <div className="body-container">
            <Header />
            <div className='card-container' >
                
                {Caracters.map((item) => (
                    
                    <Link onClick={() => profile(item.id)} key={item.id} to="about" >
                        <div
                            key={item.id}
                            className='card'
                             >
                            <div className='card-name'>
                                <p className='char-name'>{item.name}</p>
                            </div>

                            <div className='card-image'>
                                <img src={item.thumbnail.path + "/portrait_incredible.jpg"} alt="" />
                            </div>
                            <p className='char-description'>{item.description} </p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='button-container'>
                <button onClick={()=> offsetminus()}>Previous</button>
                <button onClick={()=> offsetplus()}>Next</button>
            </div>
            
        </div>
    );
}

export default Home;
