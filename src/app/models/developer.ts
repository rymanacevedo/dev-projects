export class Developer {
  constructor(
    private _id: number,
    private _name: string,
    private _title: string
  ) { }


  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
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
