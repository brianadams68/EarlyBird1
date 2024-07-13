"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const checkAuth_1 = require("../middlewares/checkAuth");
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
// Sign-up Route
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        // Check if user with the same email already exists
        let user = yield User_1.default.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }
        // Create new user
        const newUser = new User_1.default({
            username,
            email,
            password: yield bcryptjs_1.default.hash(password, 10),
            userId: new mongoose_1.default.Types.ObjectId(), // Generate new ObjectId for userId
        });
        yield newUser.save();
        res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        console.error("Error in sign up:", error);
        res.status(500).json({ error: "User creation failed" });
    }
}));
// Protected Route Example
router.get("/protected-route", checkAuth_1.checkAuth, (req, res) => {
    // This function will only execute if checkAuth middleware succeeds
    res.json({ message: "Access granted to protected route" });
});
// Sign-in Route
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = yield User_1.default.findOne({ email });
        if (!user || !(yield bcryptjs_1.default.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET || "your_jwt_secret", {
            expiresIn: "1h",
        });
        res.json({ token });
    }
    catch (error) {
        console.error("Error in sign in:", error);
        res.status(500).json({ error: "Sign-in failed" });
    }
}));
exports.default = router;
