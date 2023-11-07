const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
const phoneRegex = /(\+\d{1,2}\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{4}|\(\d{3}\)\s?\d{3}[-\s]?\d{4}|\d{10})/;
const urlRegex = /(http|https):\/\/www\.[a-zA-Z0-9.-]+\.(com|org|edu|io)/;
const testEmails = [
    'example@email.com',
    'user123@example.co.uk',
    'steven.joe1@sub.domain.com',
    'invalid.email@.com', // Invalid email address
];

testEmails.forEach(email => {
    if (emailRegex.test(email)) {
        console.log(`${email} is a valid email address.`);
    } else {
        console.log(`${email} is not a valid email address.`);
    }
});
