function saveContact() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phoneNumber = document.getElementById('phoneNumber').value;


    if (firstName && lastName && phoneNumber) {
      
      let contact = document.getElementById('contacts');

    
      let newRow = document.createElement('tr');


      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${phoneNumber}</td>
      `;

     
      contact.appendChild(newRow);

     
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('phoneNumber').value = '';
    } else {
      alert('Invalid Output.');
    }
  }