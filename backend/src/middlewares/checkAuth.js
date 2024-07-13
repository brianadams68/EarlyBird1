"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Middleware function for authentication checks
const checkAuth = (req, res, next) => {
    var _a;
    try {
        // Check if authorization header is present
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: Missing token' });
        }
        // Ensure JWT_SECRET is defined
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET is not defined');
        }
        // Verify JWT token
        const decodedToken = jsonwebtoken_1.default.verify(token, secret);
        if (!decodedToken || typeof decodedToken !== 'object' || !('userId' in decodedToken)) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        // Attach userId to request object for use in subsequent middleware or route handler
        req.userId = decodedToken.userId;
        // Continue to the next middleware or route handler
        next();
    }
    catch (error) {
        console.error('Error in authentication middleware:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.checkAuth = checkAuth;
