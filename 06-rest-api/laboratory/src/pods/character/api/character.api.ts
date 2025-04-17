import axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCities } from './character.mock-data';

const getCharacterQuery = `
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
    }
  }
`;

const graphqlEndpoint = 'graphql';

export async function getCharacter(characterId) {
  try {
    const variables = {id: characterId};
    const response = await axios.post('graphql', {
      query: getCharacterQuery,
      variables: variables,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.errors) {
      console.error('GraphQL Errors:', response.data.errors);
      return null;
    }

    return response.data.data.character;
  } catch (error) {
    console.error('Error fetching character:', error);
    return null;
  }
}

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
