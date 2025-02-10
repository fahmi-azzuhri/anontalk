import prisma from "../config/database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createAdmin = async (req, res) => {
  try {
    const existingAdmin = await prisma.admin.findFirst();
    if (existingAdmin)
      return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const admin = await prisma.admin.create({
      data: { username: req.body.username, password: hashedPassword },
    });

    res.status(201).json({ message: "Admin created", admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { username: req.body.username },
    });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isValid = await bcrypt.compare(req.body.password, admin.password);
    if (!isValid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
