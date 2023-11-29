import Race from './Race';

class Dwarf extends Race {
  private static DwarfCount = 0;
  private _maxLifePoints = 80;

  static createdRacesInstances(): number {
    return Dwarf.DwarfCount;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.DwarfCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;