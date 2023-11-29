import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static WarriorCount = 0;
  private readonly _energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    return Warrior.WarriorCount;
  }

  constructor(name: string) {
    super(name);
    Warrior.WarriorCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;