import React, {useState, useEffect} from 'react';
import {Link} from "@reach/router";
import Header from '../components/Header';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';

const List = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8010/api/players")
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const deletePlayer = (playerId) => {
        axios.delete("http://localhost:8010/api/players/" + playerId)
            .then(res => {
                setPlayers(players.filter( val => val._id !== playerId));
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Header />
            <div className="listContent">
                <div className="contentHeader">
                    <h2><Link to="/players/addplayer">Add Player</Link></h2>
                    <div className="divider"></div>
                    <h2><Link to="/players/list">Lineup</Link></h2>
                </div>
                <div className="table">
                <Table className="ui yellow table">
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Player Name</Table.HeaderCell>
                        <Table.HeaderCell>Preferred Position</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {players.map((value, idx) => {
                        return <Table.Row key={idx}>
                        <Table.Cell>
                            <Link to={`/players/${value._id}`}>{value.name}</Link>
                        </Table.Cell>
                        <Table.Cell>{value.position}</Table.Cell>
                        <Table.Cell>
                        <Button className="red" content='DELETE' 
                        onClick={(e)=>{if (window.confirm(`Are you sure you wish to delete ${value.name}?`)) deletePlayer(value._id)}} /></Table.Cell>
                        </Table.Row>
                        })}
                    </Table.Body>
                </Table>
                </div>
        </div>
        </div>
    )
}

export default List;