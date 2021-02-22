import { Generator } from "./extend/Generator";

class Cli extends Generator {
  constructor() {super();}

  async initialize() {
    return "初始化";
  }

  async prompt() {
    return "交互";
  }

  async write() {
    return "文件";
  }

  async install() {
    return "安装";
  }

  async end() {
    return "结束";
  }
}

export { Cli };