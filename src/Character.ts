import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const randomNumber = getRandomInt(1, 10);

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = randomNumber;
    this._race = new Elf('Elf', this._dexterity);
    this._archetype = new Mage('Mage');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomNumber;
    this._defense = randomNumber;
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomNumber,
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }
    
  attack(enemy: Fighter): void {
    const damage = this._strength;
    if (this._strength > 0) {
      enemy.receiveDamage(damage);
    } else {
      enemy.receiveDamage(1);
    }
  }

  special?(enemy: Fighter): void {
    const specialDamage = this._strength * 3;
    enemy.receiveDamage(specialDamage);
  }

  levelUp(): void {
    this._strength += randomNumber;
    this._dexterity += randomNumber;
    this._defense += randomNumber;
    this._energy.amount = 10;
    if (this._maxLifePoints + randomNumber > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints += randomNumber;
    }
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense; 
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

export default Character;