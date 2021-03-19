export class Invoice {
    // access modifiers
    // 1.public can be acessed and changed in and out of the class
    // 2. private can only be accessed in the class
    // 3. readonly -  can only be read in and out of the class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
    }
}
