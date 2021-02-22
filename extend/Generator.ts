/**
 * 脚手架抽象类
 * 定义了脚手架的主要结构和主要启动逻辑
 */
abstract class Generator {
  protected constructor() {
    this.start().then(result => console.log(result)).catch(error => console.log(error));
  }

  // 初始化
  protected initialize() {}

  // 提问
  protected prompt() {}

  // 写入
  protected write() {}

  // 安装
  protected install() {}

  // 结束
  protected end() {}

  /*
   * 启动器：
   * 启动整体服务进程
   */
  private async start() {
    return await Promise.all([
      this.initialize(),
      this.prompt(),
      this.write(),
      this.install(),
      this.end(),
    ]);
  }
}

export { Generator };