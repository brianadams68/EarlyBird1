"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const SignUp = () => {
    const [formData, setFormData] = (0, react_1.useState)({ username: '', email: '', password: '' });
    const handleChange = (e) => setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield axios_1.default.post('/api/auth/signup', formData);
            alert('User created successfully');
        }
        catch (error) {
            console.error('Sign-up error', error);
            alert('Sign-up failed');
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" },
            react_1.default.createElement("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm" },
                react_1.default.createElement("img", { alt: "Your Company", src: "/2.png", className: "mx-auto h-20 w-auto" }),
                react_1.default.createElement("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" }, "Create an Account")),
            react_1.default.createElement("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm" },
                react_1.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900" }, "Username"),
                        react_1.default.createElement("div", { className: "mt-2" },
                            react_1.default.createElement("input", { id: "username", name: "username", type: "text", required: true, autoComplete: "username", value: formData.username, onChange: handleChange, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900" }, "Email address"),
                        react_1.default.createElement("div", { className: "mt-2" },
                            react_1.default.createElement("input", { id: "email", name: "email", type: "email", required: true, autoComplete: "email", value: formData.email, onChange: handleChange, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900" }, "Password"),
                        react_1.default.createElement("div", { className: "mt-2" },
                            react_1.default.createElement("input", { id: "password", name: "password", type: "password", required: true, autoComplete: "new-password", value: formData.password, onChange: handleChange, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("button", { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" }, "Sign Up"))),
                react_1.default.createElement("p", { className: "mt-10 text-center text-sm text-gray-500" },
                    "Already have an account?",
                    ' ',
                    react_1.default.createElement("a", { href: "/sigin", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500" }, "Sign In"))))));
};
exports.default = SignUp;
