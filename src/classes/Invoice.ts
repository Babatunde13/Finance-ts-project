import {HasFormatter} from '../Interfaces/HasFormarter'

export class Invoice implements HasFormatter {
  // access modifiers
  // 1.public can be acessed and changed in and out of the class
  // 2. private can only be accessed in the class
  // 3. readonly -  can only be read in and out of the class
    constructor (
      readonly client: string,
      private details: string,
      public amount: number
    ) {}
  
    format () {
      return `${this.client} owes $${this.amount} for ${this.details}.`
    }
  
  }
  