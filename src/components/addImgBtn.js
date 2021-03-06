"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddImageBtn = void 0;
const react_1 = __importDefault(require("react"));
require("../css/addImgBtn.css");
const AddImageBtn = ({ images, readAndAppend, validateFile, }) => {
    let submitHnadler = function (e) {
        if (e.target.files) {
            let count = e.target.files.length;
            for (const n of e.target.files) {
                if (validateFile(n))
                    readAndAppend(n, count);
                else
                    count--;
            }
        }
    };
    return images.length > 0 ? (react_1.default.createElement("div", { className: "addimgbtn-container" },
        react_1.default.createElement("div", { className: "indicator" },
            react_1.default.createElement("span", null, images.length)),
        react_1.default.createElement("form", null,
            react_1.default.createElement("label", null,
                react_1.default.createElement("input", { type: "file", className: "addbtn", onChange: submitHnadler, multiple: true }),
                react_1.default.createElement("img", { src: "../public/plus.png", className: "img-container" }))))) : (react_1.default.createElement("div", { className: "flex justify-center" },
        react_1.default.createElement("form", null,
            react_1.default.createElement("label", { className: "btn-before-add" },
                react_1.default.createElement("input", { type: "file", multiple: true, onChange: submitHnadler, className: "home-addbtn-container" }),
                "Image Upload"))));
};
exports.AddImageBtn = AddImageBtn;
//# sourceMappingURL=addImgBtn.js.map