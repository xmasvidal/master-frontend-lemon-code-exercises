import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  picture: character.image,
  name: character.name,
  description: character.bestSentence,
  rating: undefined,
  address: undefined,
});
