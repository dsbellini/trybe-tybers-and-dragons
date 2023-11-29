import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static RangerCount = 0;
  private readonly _energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    return Ranger.RangerCount;
  }

  constructor(name: string) {
    super(name);
    Ranger.RangerCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;