import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.find((character) => character.id.toString() === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
