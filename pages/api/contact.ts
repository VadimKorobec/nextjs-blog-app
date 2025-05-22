import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import { Message } from "@/types/message";

const uri = process.env.MONGODB_URI;

const handler = async (
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

    if (!uri) {
      return res
        .status(500)
        .json({ message: "Database connection string not found." });
    }

    const newMessage: Message = {
      name,
      email,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(uri);
    } catch (error) {
      res.status(500).json({
        message: "Could not connect to database.",
      });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId.toString();
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }

    client.close()

    res.status(201).json({
      message: "Success",
    });
  }
};

export default handler;
