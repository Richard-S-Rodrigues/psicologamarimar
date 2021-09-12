/* eslint-disable import/no-anonymous-default-export */

import { Request, Response } from "express";

interface BodyData {
  name: string;
  email: string;
  tel: string;
  message: string;
}

interface MailOptionsData {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export default function (req: Request, res: Response) {
  const { name, email, tel, message }: BodyData = req.body;

  const nodemailer = require("nodemailer");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marimarnascimento@gmail.com",
        pass: process.env.PASS,
      },
    });

    const mailOptions: MailOptionsData = {
      from: email,
      to: "marimarnascimento@gmail.com",
      subject: "psicoterapia",
      text: `
      \nE-MAIL: ${email},
      \nNOME: ${name},
      \nTELEFONE: ${tel}
      \n---------------------------------------------------------------- 
      \n${message}
      `,
    };

    transporter.sendMail(mailOptions, function (err: any, info: any) {
      if (err) {
        console.log(err);
        return res.status(400).send();
      } else {
        console.log(`Email sent: ${info.response}`);

        return res.status(201).send();
      }
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).send();
  }
}
