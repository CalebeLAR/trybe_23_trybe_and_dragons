import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name:string) {
    this._dexterity = 1 + Math.floor(Math.random() * 9);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = 1 + Math.floor(Math.random() * 9);
    this._defense = 1 + Math.floor(Math.random() * 9);
    this._energy = {
      type_: this._archetype.energyType, 
      amount: 1 + Math.floor(Math.random() * 9),
    };
    this._name = name;
  }

  get race() {
    return this._race;
  }
 
  get archetype() {
    return this._archetype;
  }
 
  get lifePoints() {
    return this._lifePoints;
  }
 
  get strength() {
    return this._strength;
  }
 
  get defense() {
    return this._defense;
  }
 
  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return {
      type_: this._energy.type_, 
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    } 
    const life = this._lifePoints - damage;
    if (life <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = life;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    console.log(`returned: ${enemy.strength} seus pontos: ${this._lifePoints}`);
  }

  levelUp(): void {
    this._strength += 1 + Math.floor(Math.random() * 9);
    this._dexterity += 1 + Math.floor(Math.random() * 9);
    this._defense += 1 + Math.floor(Math.random() * 9);
    this._energy.amount = 10;
    const life = 1 + Math.floor(Math.random() * 9) + this._maxLifePoints;
    if (life >= this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = life;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    console.log(`${this._name} lançou o poder especial`);
  }
}

export default Character;