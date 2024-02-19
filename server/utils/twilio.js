const twilio = require('twilio');

const accountSid = 'AC616ad08fa4f6e946b748d364c70304d5';
const authToken = '3da7278eac1bdf0c66705fed260e5faa';
const client = new twilio(accountSid, authToken);

const sendVerificationCode = async (phoneNumber, verificationCode) => {
    try {
        await client.messages.create({
            body: `Your verification code is: ${verificationCode}`,
            from: '+12132906989',
            to: phoneNumber,
        });
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
};

module.exports = { sendVerificationCode };