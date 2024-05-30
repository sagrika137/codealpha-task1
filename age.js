function calculateAge() {
    // Get the values from the input fields
    let dobDate = document.getElementById('dob-date').value;
    let dobTime = document.getElementById('dob-time').value;

    // Check if the date of birth and time are valid
    if (!dobDate || !dobTime) {
        document.getElementById('result').innerText = 'Please enter a valid date and time of birth.';
        return;
    }

    // Convert the input date and time to a Date object
    let birthDateTime = new Date(dobDate + 'T' + dobTime);
    let now = new Date();

    // Calculate age
    let ageInMilliseconds = now - birthDateTime;
    let ageDate = new Date(ageInMilliseconds);

    let years = ageDate.getUTCFullYear() - 1970; // 1970 is the epoch start year
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;
    let hours = ageDate.getUTCHours();
    let minutes = ageDate.getUTCMinutes();
    let seconds = ageDate.getUTCSeconds();

    // Display the result
    document.getElementById('result').innerText = 
        `You are ${years} years, ${months} months, ${days} days, ${hours} hours, 
        ${minutes} minutes, and ${seconds} seconds old.`;
}
