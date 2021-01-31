import React, {useState, useEffect} from 'react';
import {Link} from "@reach/router";
import Header from '../components/Header';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';

const Status = (props) => {
    const {id} = props;
    const [players, setPlayers] = useState([]);

    // to get the player list
    useEffect(() => {
        axios.get("http://localhost:8010/api/players")
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => console.log(err))
    }, [props]);
    
    // to update the status
    const updateStatus = (id, playing, notPlaying, undecided) => {
        let currentStatus = {
            playing: playing,
            notPlaying: notPlaying,
            undecided: undecided
        };
        
        axios.put(`http://localhost:8010/api/players/${id}`, currentStatus) 
            .then(res => {
                setPlayers(players.map((player, idx) => {
                    if (player._id == res.data._id){
                        player.playing = res.data.playing;
                        player.notPlaying = res.data.notPlaying;
                        player.undecided = res.data.undecided;
                    } 
                    return player;
                }));
                console.log(res.data);
            })
            .catch(err => console.log(err));
        }
    return (
        <div>
            <Header />
            <div className="listContent">
                <h1 className="statusTitle">Player Status - Game 1</h1>
                <div className="table">
                <Table className="ui yellow table">
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Player Name</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {players.map((value, idx) => {
                        return <Table.Row key={idx}>
                        <Table.Cell>
                            <Link to={`/players/${value._id}`}>{value.name}</Link>
                        </Table.Cell>
                        <Table.Cell>
                            <Button style={{"marginRight": "50px"}} 
                            className={ value.playing === true ? "green" : ""}
                            onClick={(e) => updateStatus(value._id, true, false, false)}
                            content='Playing' />
                            <Button style={{"marginRight": "50px"}} 
                            className={ value.notPlaying === true ? "red" : ""}
                            onClick={(e) => updateStatus(value._id, false, true, false)}                        
                            content='Not Playing' />
                            <Button 
                            className={ value.undecided === true ? "yellow" : ""}
                            onClick={(e) => updateStatus(value._id, false, false, true)}                                  
                            content='Undecided' />
                        </Table.Cell>
                        </Table.Row>
                        })}
                    </Table.Body>
                </Table>
                </div>
         </div>
        </div>
    )
}

export default Status;

