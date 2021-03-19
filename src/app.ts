import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplates.js'
import {Payment} from './classes/payments.js'
import {HasFormatter} from './Interfaces/HasFormarter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter
    let data: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber]
    if (type.value === 'invoice') {
      doc = new Invoice(...data)
    } else {
      doc = new Payment(...data)
    }
    list.render(doc, type.value, 'end')
})