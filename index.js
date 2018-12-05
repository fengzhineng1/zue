class Zue {
  constructor(zue) {
    this.zue = zue
    this.render()
    // this.render.bind(this)
  }

  render() {
    const app = document.getElementById('app')
    const z = document.createElement('p')
    let { data, template, mounted } = this.zue

    // template = template.replace(/(\s*)/g, '')
    var regx;
    Object.keys(data).forEach(v => {
      regx = new RegExp(`(?<={{)${v}(?=}})`, 'g')
      template = template.replace(regx, data[v])
    })
    template = template.replace(/{|}/g, '')
    z.innerHTML = template
    app.appendChild(z)
    mounted && mounted()
  }
}

var template = `
  <div>
    {{title}}
    {{age}}
  </div>
  <div>{{ title }}</div>
  <h1>{{ inputText }}</h1>
  <input type="text" z-model="inputText" />
`

new Zue({
  el: '#app',
  template,
  data: {
    title: '1234',
    age: 123,
    inputText: ''
  },
  mounted: () => {
    console.log(123)
  }
})

const parseNode = parse(template) => AST(抽象语法树)

let compilerStr = 'return ' + buildRenderStr(parseNode)

// why new function by using new Function() method.
this.compiler = buildCompiler(compilerStr)

// 执行一个this._h方法来描述一个dom, 最终返回一个需要渲染的节点
this._h('div', {}, [
  _this._h('h2', {}, [
    this._s(this.data.count)
  ])
])

this._s = (expression) => expression

this._h = (tagName, attribute, children) => {
  return Node
}


