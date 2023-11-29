import Race from './Race';

class Elf extends Race {
  private static ElfCount = 0;
  private _maxLifePoints = 99;

  static createdRacesInstances(): number {
    return Elf.ElfCount;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.ElfCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;