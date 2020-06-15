export class Project {
  constructor(
    private _id: number,
    private _name: string,
    private _ationYear: number,
    private _owner?: any[]
  ) { }


  get owner(): any[] {
    return this._owner;
  }
  set owner(value: any[]) {
    this._owner = value;
  }
  get ationYear(): number {
    return this._ationYear;
  }
  set ationYear(value: number) {
    this._ationYear = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
}
