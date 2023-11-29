import Race from './Race';

class Halfling extends Race {
  private static HalflingCount = 0;
  private _maxLifePoints = 60;

  static createdRacesInstances(): number {
    return Halfling.HalflingCount;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.HalflingCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;