import { Message } from "@/types/message";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid input.",
      });
      return;
    }

    const newMessage: Message = {
      name,
      email,
      message,
    };

    res.status(201).json({
      message: "Success",
    });
  }
};

export default handler;
