import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType:EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(_name:string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;