var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class promise {
    constructor() {
        this.run();
    }
    // @ts-ignore
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return Promise.resolve(`false`);
        });
    }
    // @ts-ignore
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            return (`this is prompt`);
        });
    }
    end() {
        // @ts-ignore
        return Promise.resolve('this is end');
    }
    run() {
        // @ts-ignore
        /*new Promise(this.initialize)
          .then(res=>{
            console.log(res)
            if (res) { // @ts-ignore
              return new Promise(this.prompting)
            }
          })
          .then(res=> console.log(res))
          .catch(err => {console.error(err)});*/
        // @ts-ignore
        Promise.all([this.initialize(), this.prompting()]).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
}
new promise();
// 逻辑：
// 1、初始化完成后，执行
// 2、prompt，完成后，执行
// 3、end
