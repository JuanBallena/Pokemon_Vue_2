export interface IPokemon {
  name: string,
  type_id: number;
  trainer_id: number;
}

export class Pokemon {
  public name: string;
  public type_id: number;
  public trainer_id: number;

  constructor(pokemon: IPokemon) {
    this.name = pokemon.name
    this.type_id = pokemon.type_id
    this.trainer_id = pokemon.trainer_id
  }
}