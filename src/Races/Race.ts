abstract class Race {
  constructor(readonly name:string, readonly dexterity:number) {}

  // get name():string {
  //   return this._name;
  // }
  
  // get dexterity():number {
  //   return this._dexterity;
  // }
  
  abstract get maxLifePoints():number;

  static createdRacesInstances():number { 
    throw new Error('Not implemented');
  }
}

export default Race;