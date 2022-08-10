function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let tncInput = document.getElementById('tnC').checked

    // console.log(firstNameInput,lastNameInput,emailInput,cityInput,stateInput,zipInput,tncInput)
      let error = false
    if(firstNameInput.length){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none' 
        error = true
    }

    if(lastNameInput.length){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none' 
        error = true
    }
    
    if(emailInput.length && emailInput.includes('@')&&emailInput.includes('.')&& emailInput.lastIndexOf('.')<=emailInput.length-3){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none' 
        error = true    
    }

    if(zipInput.length===6 && parseInt(zipInput)){
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none' 
        error = true
    }

    if(cityInput.length>=3){
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none' 
        error = true
    }

    if(stateInput!=='none'){
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none' 
        error = true
    }

    if(tncInput){
        document.getElementById('tnc-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnc-invalid').style.display = 'block'
        error = true
    }
     
    if(!error){
        alert('your details have been submitted sucessfully')

        document.getElementById('first-name').value=''
        document.getElementById('last-name').value=''
        document.getElementById('email').value=''
        document.getElementById('city').value=''
        document.getElementById('state').value='none'
        document.getElementById('zip').value=''
        document.getElementById('tnC').checked= false
        
        document.getElementById('first-name-valid').style.display = 'none' 
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'  
        document.getElementById('zip-valid').style.display = 'none' 
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('state-valid').style.display = 'none'  
    }
    
    
}