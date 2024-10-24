import React from "react";
import { Link } from "react-router-dom";
import {
    TextField, TableContainer, Table, TableHead,
    TableRow, TableCell, TableBody, Paper, Avatar
} from '@mui/material';
import { getCharacters } from 'rickmortyapi';
import { useDebounce } from 'use-debounce';
import { ApiSelector } from './api-selector';
import { SelectedItemContext } from "./app";

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
    const [debounceFilter] = useDebounce(nameToSearch, 1000);
    const {selectedItem, setSelectedItem} = React.useContext(SelectedItemContext);
 
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
      }, [debounceFilter]);

    function buildDescription(character: any) {
        return `${character.species}, ${character.gender}, ${character.status}`;
    }

    function selectItem(character:Character) {

        const description = buildDescription(character);

        setSelectedItem({
            name: character.name,
            imageUrl: character.image,
            description: description
        });
    }

    return (
        <>

            <ApiSelector></ApiSelector>

            <h2>Rick and Morty API</h2>

            <div>
                <TextField id="outlined-basic" label="Character Name" variant="outlined" size="small"
                    value={nameToSearch} onChange={(e) => setNameToSearch(e.target.value)} />
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
                                    <Link onClick={(e) => selectItem(character)} to={`/detail/${character.name}`}>{character.name}</Link>
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
