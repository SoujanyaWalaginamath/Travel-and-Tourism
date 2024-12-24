const form = document.getElementById('registration-form');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const travelDate = document.getElementById('travel-date').value;
  const destination = document.getElementById('destination').value;
  const numberOfTravelers = document.getElementById('number-of-travelers').value;

  if (name && email && phone && travelDate && destination && numberOfTravelers) {
    // Send data to server or perform other actions
    console.log('Ticket booked successfully!');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Travel Date: ${travelDate}`);
    console.log(`Destination: ${destination}`);
    console.log(`Number of Travelers: ${numberOfTravelers}`);
    window.location.href = 'success.html';
  } else {
    console.log('Please fill in all required fields.');
  }
});
