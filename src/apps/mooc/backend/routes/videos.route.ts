import { Router} from "express";
import { VideoPostController } from "../controllers/VideoPostController";
import container from "../dependency-injection";
import httpStatus from "http-status";
import fs from "fs";
import path from "path";

const multer = require("multer");
const tmpPath = '/tmp/aletheia-contents';
const storage = multer.diskStorage({
    destination: function (req : any, file : any, cb : any) {
        if(!fs.promises.access(tmpPath)) {
            fs.promises.mkdir(path.basename(tmpPath), {})
        }
        cb(null, tmpPath);
    },
    filename: function(req : any, file : any, cb : any) {
        cb(null, `${req.id}-${req.name}`);
    }
});

const upload = multer({storage: storage}).single('content');

export const register = (router: Router) => {
    const controller: VideoPostController = container.get('Apps.mooc.controllers.VideoPostController');
    router.post('/videos', (req, res) => {
        upload(req, res, (err : any) => {
            return !err ? controller.run(req, res) : res.status(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });
};