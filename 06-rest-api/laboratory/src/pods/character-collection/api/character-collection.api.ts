import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const { data } = await axios.get<{ results: CharacterEntityApi[] }>(
      `/api/character`
    );
    return data.results;
  } catch (error) {
    console.error('Error getting the characters: ', error);
    throw new Error('Error getting the characters');
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  return true;
};
