import { Reservationy } from "./reservatory-interface";

export class Reservation implements Reservationy {
  dow: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  numbersAndCases: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  final8NumberCode: string = "";

  getDowBooking(): string {
    return this.dow[Math.floor(Math.random() * 7)];
  }
  getCodeBooking(): string {
    for (let i = 0; i < 8; i++) {
      this.final8NumberCode = this.final8NumberCode.concat(this.numbersAndCases[Math.floor(Math.random() * 34)]);
    }
    return this.final8NumberCode.toUpperCase();
  }
  getFinalCode(): string {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`
  }
}