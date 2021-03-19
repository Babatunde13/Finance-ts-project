import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplates.js'
import {Payment} from './classes/payments.js'
import {HasFormatter} from './Interfaces/HasFormarter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instanc
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter
    if (type.value === 'invoice') {
      doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
      doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})

// Generics

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

let docOne = addUID({name: "yoshi", age: 40})

console.log(docOne.age)

// Enums
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
  uid: number
  resourceName: string
  data: T,
  rsourceType: number
}

let docTwo: Resource<string[]> = {
  uid: 3, resourceName: '', data: [],
  rsourceType: ResourceType.AUTHOR
}

console.log(docTwo)
