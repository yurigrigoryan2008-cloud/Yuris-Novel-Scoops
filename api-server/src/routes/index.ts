import { Router, type IRouter } from "express";
import healthRouter from "./health";
import flavourReadingRouter from "./flavour-reading";
import bookCoverRouter from "./book-cover";

const router: IRouter = Router();

router.use(healthRouter);
router.use(flavourReadingRouter);
router.use(bookCoverRouter);

export default router;
