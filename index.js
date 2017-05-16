const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = document.createElement ('li')
  personName.textContent = "Name: " + form.personName.value
  
  const hairColor = form.hairColor.value
  const color = document.createElement ('li')
  color.textContent = "Hair Color: "

  const age = document.createElement ('li')
  age.textContent = "Age: " + form.age.value 

  const birthplace = document.createElement ('li')
  birthplace.textContent = "Birthplace: " + form.birthplace.value 

  const colorDiv = renderColor(hairColor)

color.appendChild(colorDiv)
details.appendChild(personName)
details.appendChild(color)
details.appendChild(age)
details.appendChild(birthplace)

 /* details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${colorDiv.outerHTML}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
    </ul>
  ` 
*/
}

personForm.addEventListener('submit', handleSubmit)

