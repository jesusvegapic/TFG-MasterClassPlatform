import { Router, Request, Response } from "express";
import { VideoPutController } from "../controllers/VideoPutController";
import container from "../dependency-injection";

export const register = (router: Router) => {
    const controller: VideoPutController = container.get('Apps.mooc.controllers.VideoPutController');
    router.put('/videos/:id', (req: Request, res: Response) => controller.run(req,res));
};