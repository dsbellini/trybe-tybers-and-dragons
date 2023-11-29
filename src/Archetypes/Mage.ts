import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static MageCount = 0;
  private readonly _energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    return Mage.MageCount;
  }

  constructor(name: string) {
    super(name);
    Mage.MageCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;