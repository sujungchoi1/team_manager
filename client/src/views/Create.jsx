import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';

const Create = () => {

    const [errors, setErrors] = useState([]);

    const createPlayer = (player) => {
        axios.post('http://localhost:8010/api/players/new', player)
            .then(res => {
                console.log(res.data)
                navigate('/players/list')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <Header />
            <div className="listContent">
                <div className="contentHeader">
                    <h2 style={{ "margin": "20px 0" }}><Link to="/players/list">Player List</Link></h2>
                </div>
                <h2 className="formTitle">Add Player</h2>
                {errors.map((err, index) => <h3 style={{ "color": "red", "fontFamily": "Poppins" }} key={index}> {err} </h3>)}

                <PlayerForm onSubmitProp={createPlayer} initialName="" initialPosition="" />

            </div>
        </div>
    )
}

export default Create;