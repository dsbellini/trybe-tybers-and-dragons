import Race from './Race';

class Orc extends Race {
  private static OrcCount = 0;
  private _maxLifePoints = 74;

  static createdRacesInstances(): number {
    return Orc.OrcCount;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.OrcCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;