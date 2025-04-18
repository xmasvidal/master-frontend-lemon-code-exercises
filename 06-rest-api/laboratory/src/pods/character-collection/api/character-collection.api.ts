import axios from 'axios';

const graphqlQuery = `
  query {
  characters() {
    info {
      count
    }
    results {
      id
      name
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
  }
}
`;

export async function getCharacterCollection() {
  try {
    const response = await axios.post('graphql', {
      query: graphqlQuery,
      variables: {},
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.errors) {
      console.error('GraphQL Errors:', response.data.errors);
      return null;
    }

    return response.data.data.characters.results;
  } catch (error) {
    console.error('Error fetching characters collection:', error);
    return null;
  }
}

export const deleteCharacter = async (id: string): Promise<boolean> => {
  return true;
};
