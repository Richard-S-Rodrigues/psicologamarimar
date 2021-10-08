/* eslint-disable import/no-anonymous-default-export */

import { Request, Response } from "express";

interface BodyData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface MailOptionsData {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export default function (req: Request, res: Response) {
  const { name, email, phoneNumber, message }: BodyData = req.body;

  const nodemailer = require("nodemailer");

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: "marimarnascimento@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASS,
      },
    });

    const mailOptions: MailOptionsData = {
      from: email,
      to: "richardsouzarodrigues555@gmail.com",
      subject: "psicoterapia",
      text: phoneNumber
        ? `
      \nE-MAIL: ${email},
      \nNOME: ${name},
      \nCELULAR: ${phoneNumber}
      \n---------------------------------------------------------------- 
      \n${message}
      `
        : `
      \nE-MAIL: ${email},
      \nNOME: ${name}
      \n---------------------------------------------------------------- 
      \n${message}
      `,
    };

    transporter.sendMail(mailOptions, function (err: any, info: any) {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      console.log(`Email sent: ${info.response}`);

      return res.status(201).send();
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).send();
  }
}
