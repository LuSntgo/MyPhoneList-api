import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return res.sendStatus(401);
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    await db.collection("sessions").insertOne({ userId: user._id, token });

    return res.send({ token, name: user.name, avatar: user.avatar });
  }

  res.sendStatus(401);
}

export async function signUp(req, res) {
  const user = req.body;

  try {
    let isEmailduplicate = await db
      .collection("users")
      .findOne({ email: user.email });
    if (isEmailduplicate) {
      res.status(409).send("Email já cadastrado");
      return;
    }

    const encryptedPassword = bcrypt.hashSync(user.password, 10);
    await db
      .collection("users")
      .insertOne({ ...user, password: encryptedPassword });

    res.sendStatus(201);
    return;
  } catch {
    res.sendStatus(500);
  }
}
