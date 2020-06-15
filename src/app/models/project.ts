export class Project {
  constructor(
    private _id: number,
    private _name: string,
    private _publicationYear: number,
    private _owner?: string[]
  ) { }


  get owner(): any[] {
    return this._owner;
  }
  set owner(value: any[]) {
    this._owner = value;
  }
  get publicationYear(): number {
    return this._publicationYear;
  }
  set publicationYear(value: number) {
    this._publicationYear = value;
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
