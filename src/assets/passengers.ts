export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: Boolean;
  checkInDate: Number;
  children?: child[];
}
export interface child {
  
  name: string;
  age: number

}

export const passengers: Passenger[] = [
];
