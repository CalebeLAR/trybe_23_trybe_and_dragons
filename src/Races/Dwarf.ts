import Race from './Race';

class Dwarf extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints:number;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;