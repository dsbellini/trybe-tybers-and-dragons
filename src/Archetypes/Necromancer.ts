import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static NecromancerCount = 0;
  private readonly _energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    return Necromancer.NecromancerCount;
  }

  constructor(name: string) {
    super(name);
    Necromancer.NecromancerCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;