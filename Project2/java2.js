// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height === '' || weight === '' || height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)){
        results.innerHTML = "Please enter valid height and weight"

 } else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    results.innerHTML =`<span>${bmi}</span>`
 }

})