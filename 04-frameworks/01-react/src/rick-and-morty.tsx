import React from "react";
import { Link } from "react-router-dom";
import {
    Button, TextField, TableContainer, Table, TableHead,
    TableRow, TableCell, TableBody, Paper, Avatar
} from '@mui/material';
import { getCharacters } from 'rickmortyapi';

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

export const RickAndMortyPage: React.FC = () => {

    const [characters, setCharacters] = React.useState<Character[]>([]);
    const [nameToSearch, setNameToSearch] = React.useState<string>("rick");

    const searchCharacters = () => {
        getCharacters({
            name: nameToSearch
        })
            .then((response) => {
                return response.data.results;
            })
            .then((json) => setCharacters(json));
    }

    React.useEffect(() => {
        searchCharacters();
      }, []);

    return (
        <>
            <h2>Hello from Rick and Morty page</h2>

            <div>
                <TextField id="outlined-basic" label="Character Name" variant="outlined" size="small"
                    value={nameToSearch} onChange={(e) => setNameToSearch(e.target.value)} />
                <Button variant="contained" disabled={nameToSearch.length < 1} onClick={searchCharacters}>Search</Button>
            </div>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell>Avatar</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Species</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters && characters.map((character) => (
                            <TableRow
                                key={character.id}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar alt={character.name} src={character.image} />
                                </TableCell>
                                <TableCell align="right">
                                    <Link to={`/detail/${character.name}`}>{character.name}</Link>
                                </TableCell>
                                <TableCell align="right">{character.status}</TableCell>
                                <TableCell align="right">{character.species}</TableCell>
                                <TableCell align="right">{character.type}</TableCell>
                                <TableCell align="right">{character.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}