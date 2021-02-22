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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cli = void 0;
const Generator_1 = require("./extend/Generator");
class Cli extends Generator_1.Generator {
    constructor() { super(); }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            return "初始化";
        });
    }
    prompt() {
        return __awaiter(this, void 0, void 0, function* () {
            return "交互";
        });
    }
    write() {
        return __awaiter(this, void 0, void 0, function* () {
            return "文件";
        });
    }
    install() {
        return __awaiter(this, void 0, void 0, function* () {
            return "安装";
        });
    }
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            return "结束";
        });
    }
}
exports.Cli = Cli;
