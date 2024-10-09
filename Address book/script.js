document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${name} - ${phone} - ${email}`;

    // Append the new list item to the contact list
    document.getElementById('contactList').appendChild(li);

    // Clear the input fields
    document.getElementById('contactForm').reset();
});
