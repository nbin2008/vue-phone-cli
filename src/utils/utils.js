// document.getElementById('show').src = textBecomeImg(width, height, text, 16, '#DBDBDB')
export function textBecomeImg (width, height, text, fontsize, fontcolor) {
  var canvas = document.createElement('canvas')
  var context = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  context.fillStyle = fontcolor
  context.font = fontsize + 'px Arial'
  context.textBaseline = 'middle'
  context.save()
  context.translate(0, 0)
  context.rotate(-Math.PI / 10)
  context.fillText(text, 0, 100)
  context.restore()
  context.save()
  context.translate(0, height - 200)
  context.rotate(-Math.PI / 10)
  context.fillText(text, 0, 100)
  context.restore()
  context.save()
  context.translate(width / 2.5, 100)
  context.rotate(-Math.PI / 10)
  context.fillText(text, 0, 100)
  context.restore()
  context.save()
  context.translate(width / 2.5, height - 280)
  context.rotate(-Math.PI / 10)
  context.fillText(text, 0, 100)
  context.restore()
  context.save()
  context.translate(width - 100, 0)
  context.rotate(-Math.PI / 10)
  context.fillText(text, 0, 100)
  context.restore()
  context.save()
  context.translate(width - 100, height - 200)
  context.rotate(-Math.PI / 10)
  context.fillText(text, 0, 100)
  context.restore()
  const dataUrl = canvas.toDataURL('image/png')// 注意这里背景透明的话，需要使用png
  return dataUrl
}
