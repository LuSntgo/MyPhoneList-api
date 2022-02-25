import db from "../db.js";
import { ObjectId } from "mongodb";

export async function insertContact(req, res) {
  const contact = req.body;

  try {
    await db.collection("phoneList").insertOne({ ...contact });
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getList(req, res) {
  const { user } = res.locals;

  try {
    const listContact = await db.collection("phoneList").find().toArray();
    res.send(listContact);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}

export async function deleteContact(req, res) {
  const { id } = req.params;
  try {
    await db.collection("phoneList").deleteOne({ _id: new ObjectId(id) });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function updateContact(req, res) {
  const contact = req.body;
  const { id } = req.params;
  try {
    await db
      .collection("phoneList")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...contact } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
