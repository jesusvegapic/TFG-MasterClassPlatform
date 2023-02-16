import { Router} from "express";
import { VideoPutController } from "../controllers/VideoPutController";
import container from "../dependency-injection";

const multer = require("multer");
const upload = multer()

export const register = (router: Router) => {
    const controller: VideoPutController = container.get('Apps.mooc.controllers.VideoPutController');
    router.put('/videos/:id', upload.single('content') ,(req: any, res: any) => controller.run(req,res));
};