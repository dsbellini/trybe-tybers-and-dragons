import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number;
  private readonly _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType; 

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this.cost;
  }
}

export default Archetype;