const form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault();
    const userFirstName = form.client_first_name.value;
    const userLastName = form.client_last_name.value;
    const userEmail = form.client_email.value;
    const userPhoneNumber = form.client_phone_number.value;
    const userDate = form.client_date.value;
    const userTime = form.client_time.value;

    $.ajax({
        url: 'https://tranquil-sierra-86540.herokuapp.com/cherk.v8@gmail.com',
        method: 'POST',
        data: {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            phoneNumber: userPhoneNumber,
            date: userDate,
            time: userTime
        },
        dataType: 'json'
    });
};
