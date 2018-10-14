// HyperMD, copyright (c) by laobubu
// Distributed under an MIT license: http://laobubu.net/HyperMD/LICENSE
//

import * as CodeMirror from "codemirror"
import * as flowchart from "flowchart.js"
import { registerRenderer, CodeRenderer, getAddon as getFoldCode } from "hypermd/addon/fold-code"
import { getAddon as getFold } from "hypermd/addon/fold"

export const flowchartRenderer: CodeRenderer = (code, info) => {
  var fc = flowchart.parse(code)
  if (Object.keys(fc.symbols).length === 0) return null

  var el = document.createElement('div')
  el.setAttribute('class', 'hmd-fold-code-image hmd-fold-code-flowchart')

  // tell Raphael the viewport width
  var tmpContainer = document.createElement('div')
  tmpContainer.setAttribute('style', 'position: absolute;left:0;top:0;width:' + info.editor.getScrollInfo().clientWidth + 'px;height:1px;overflow:hidden')
  document.body.appendChild(tmpContainer)
  tmpContainer.appendChild(el)

  fc.drawSVG(el, info.editor.getOption("flowchart"))

  setTimeout(() => {
    document.body.removeChild(tmpContainer)
  }, 100);

  info.onRemove = () => {
    fc.clean()
    fc = null
  }

  return el
}

if (typeof flowchart === "object") {
  CodeMirror.defineOption("flowchart", null, (cm: CodeMirror.Editor) => {
    getFoldCode(cm).clear("flowchart")
    getFold(cm).startFold()
  });

  registerRenderer({
    name: "flowchart",
    pattern: /^flow(?:charts?)?$/i,
    renderer: flowchartRenderer,
    suggested: true,
  })
} else {
  console.error("[hypermd-flowchart] flowchart.js not found.")
}