
import { Router } from "express";
import * as UpdateController from './controller/update.js'
import productModel from "../../../DB/model/product.model.js";
import { auth } from "../../middleware/auth.js";
import cloudinary from "../../services/cloudinary.js";
import {  fileValidation, myMulter } from "../../services/multer.js";
const router= Router()




router.post('/',myMulter(fileValidation.image).array('images',5),UpdateController.addData)

router.get('/:placeName',UpdateController.showData)


export default router