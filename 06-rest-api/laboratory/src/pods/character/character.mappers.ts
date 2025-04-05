import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.name,
    url: character.url,
  },
  location: {
    name: character.name,
    url: character.url,
  },
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  bestSentence: character.bestSentence,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.name,
    url: character.url,
  },
  location: {
    name: character.name,
    url: character.url,
  },
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  bestSentence: character.bestSentence,
  } as unknown) as apiModel.Character);
