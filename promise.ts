interface command {
  initialize(): void;

  prompting(): void;
}

class promise implements command {
  constructor() {
    this.run();
  }

  // @ts-ignore
  async initialize() {
    // @ts-ignore
    return Promise.resolve(`false`)
  }

  // @ts-ignore
  async prompting() {
    return (`this is prompt`)
  }

  end(){
    // @ts-ignore
    return Promise.resolve('this is end')
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
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}

new promise()

// 逻辑：
// 1、初始化完成后，执行
// 2、prompt，完成后，执行
// 3、end