import axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from '#common/models';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const { data } = await axios.get(
      `/api/character/${id}`
    );
    return data;
  } catch (error) {
    console.error(`Error getting the character: ${id}`, error);
    throw new Error('Error getting the character');
  }
};

//TODO remove it
export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  try {
    const { data } = await axios.put(
      `/api/character/${character.id}`,
      character,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return true;
  } catch (error) {
    console.error(`Error updating the character: ${character.id}`, error);
    throw new Error('Error updating the character');
  }
};
