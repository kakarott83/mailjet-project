module.exports = {
    From: {
        Email: 'michael@milan-muc.de',
        Name: 'Michael',
    },
    To: [
        {
            Email: 'michael@milan-muc.de',
            Name: 'Michael',
        },
    ],
    Subject: data.text,
    TextPart: data.text,
    HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
    CustomID: 'AppGettingStartedTest',
};
