import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm'

const Edit = (props) => {

    const [ player, setPlayer ] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8010/api/players/${props.id}` )
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
            })
            .catch(err=> {
                console.log(err.response)
            })
    }, [])


    const editPlayer = (player) => {
        axios.put(`http://localhost:8010/api/players/${props.id}`, player)
            .then(res => {
                setPlayer(res.data);
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
                <h2><Link to="/players/list">Player List</Link></h2>
                <div className="divider"></div>
                <h2><Link to="/players/addplayer">Add Player</Link></h2>
            </div>

            <h2 className="formTitle">Edit Player</h2>

            {errors.map((err, index) => <h3 style={{"color": "red", "fontFamily": "Poppins"}} key={index}> {err} </h3>)}
        {loaded && (

        <PlayerForm onSubmitProp={editPlayer} initialName={player.name} initialPosition={player.position} />
        )}
        
    </div>
    </div>
    )
}

export default Edit;