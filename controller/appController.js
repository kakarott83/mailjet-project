'use strict';
const nodemailer = require('nodemailer');
const {apiKey, apiSecret} = require('../controller/env');

const mailjetTransport = require('nodemailer-mailjet-transport');

const sendMail = (req, res) => {
    const data = req.body;
    console.log(data);
    const Mailjet = require('node-mailjet');
    const mailjet = Mailjet.apiConnect(apiKey, apiSecret);
    const request = mailjet.post('send', {version: 'v3.1'}).request({
        Messages: [
            {
                From: {
                    Email: data.sender,
                    Name: data.senderName,
                },
                To: [
                    {
                        Email: data.receiver,
                        Name: data.receiverName,
                    },
                ],
                Subject: data.subject,
                //TextPart: data.text,
                HTMLPart: data.html,
                //"<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                //CustomID: 'AppGettingStartedTest',
            },
        ],
    });
    request
        .then((result) => {
            console.log(result.body);
            //res.send(result.status);
            res.send(data.text);
        })
        .catch((err) => {
            console.log(err.statusCode);
            res.send(err.statusCode);
        });
};

module.exports = {
    sendMail,
};
