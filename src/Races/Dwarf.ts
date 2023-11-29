import Race from './Race';

class Dwarf extends Race {
  private static DwarfCount = 0;

  static createdRacesInstances(): number {
    Dwarf.DwarfCount += 1;
    return Dwarf.DwarfCount;
  }

  constructor() {
    super('Dwarf', 10);
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }
}

export default Dwarf;