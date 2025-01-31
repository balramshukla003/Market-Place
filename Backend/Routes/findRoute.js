import express from "express";
import findData from "../Mongo Query/findData.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log({ email, password });

        const user = await findData({ email });

        if (!user[0]) {
            return res.json({ status: 'error', error: 'user not found' });
        }
        if (user[0].password !== password) {
            return res.json({ status: 'error', error: 'Password not matched' });
        }
        res.json({ status: 'success', match: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Server error. Please try again later.',
        });
    }
});

export default router;
