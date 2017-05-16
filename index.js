const App = {
init() {
    const personForm = document.querySelector('form')
    personForm.addEventListener('submit', this.handleSubmit.bind(this))
},

renderColor(hairColor) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
},

renderItem(name, value) {
  const item = document.createElement('li')
  item.innerHTML = `${name}: ${value}`
  return item
},

renderList(person) {
  const list = document.createElement('ul')
Array.from(person).map((input, _i, _formElements) => {
    if (input.value) {
      let value = input.value
      if (input.type === 'color') {
          value = this.renderColor(value).outerHTML
      }
    const li = this.renderItem(input.name, value)
    list.appendChild(li)
   }
  })
  return list
},

handleSubmit(ev) {
  ev.preventDefault()
  alert('Hooray')

  /* const form = ev.target
  const details = document.querySelector('.details')

 const list = renderList(form.elements)
  details.appendChild(list) */
  
  const person = {
    personName: form.personName.value,
    hairColor: renderColor(form.hairColor.value).outerHTML,
    age: form.age.value,
    birthplace: form.birthplace.value,
  }

  const list = this.renderList(form.elements)
  details.appendChild(list)
},

}

App.init()