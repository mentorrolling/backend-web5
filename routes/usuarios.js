import { Router } from "express";
import {
  deleteUserId,
  getUsers,
  postUser,
  putUserId,
} from "../controllers/usuarios.js";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.put("/:id", putUserId);
router.delete("/:id", deleteUserId);

export default router;
