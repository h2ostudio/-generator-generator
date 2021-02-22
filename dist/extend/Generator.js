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
exports.Generator = void 0;
/**
 * 脚手架抽象类
 * 定义了脚手架的主要结构和主要启动逻辑
 */
class Generator {
    constructor() {
        this.start().then(result => console.log(result)).catch(error => console.log(error));
    }
    // 初始化
    initialize() { }
    // 提问
    prompt() { }
    // 写入
    write() { }
    // 安装
    install() { }
    // 结束
    end() { }
    /*
     * 启动器：
     * 启动整体服务进程
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all([
                this.initialize(),
                this.prompt(),
                this.write(),
                this.install(),
                this.end(),
            ]);
        });
    }
}
exports.Generator = Generator;
