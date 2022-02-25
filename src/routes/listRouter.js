import { Router } from "express";
import {
  insertContact,
  getList,
  deleteContact,
  updateContact,
} from "../controllers/listController.js";
import { validateToken } from "../middleware/validateToken.js";

const listRouter = Router();

listRouter.post("/addContact", insertContact);
listRouter.get("/home", validateToken, getList);
listRouter.delete("/home/:id", deleteContact);
listRouter.put("/home/:id", updateContact);

export default listRouter;
