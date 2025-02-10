import prisma from "../config/database.js";

export const sendMessage = async (req, res) => {
  try {
    const { from, to, content } = req.body;

    const message = await prisma.message.create({
      data: { from, to, content },
    });

    res.status(201).json({ message: "Message sent", data: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await prisma.message.findMany();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
