 const form = document.querySelector("form")
 const nlwSetup = new NLWSetup(form)
 const button = document.querySelector('header button')
//add listener event- (events, function)
 button.addEventListener("click", add)
 form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ಥ_ಥ")
    return
  } 
  
  alert('Adicionado com sucesso (☞ﾟヮﾟ)☞')
  nlwSetup.addDay(today)
}
//localStorage- save data in browser
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //object-string-JSON
}

 //string-object-JSON
 const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
 nlwSetup.setData(data)
 nlwSetup.load()

