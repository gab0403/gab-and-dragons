import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;