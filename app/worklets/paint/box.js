registerPaint('box', class {
  paint(ctx, geom, properties) {
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, geom.width, geom.height)
  }
})