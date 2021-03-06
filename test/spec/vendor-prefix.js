var obj = {
  '@keyframes anim1':{
    '0%': { left: '0' },
    '100%': { left: '200px' }
  },
  body: {
    animationName: 'anim1',
    flex:1,
    display: 'flex',
    color:'red',
    textEmphasisStyle:'dot', imeAlign:'auto',
    input:{
      fontSize:'12px',
      float: 'left',
      appearance: 'none'
    }
  }
}

var result = cssobj(obj)

log(
  css(result),
  '@-webkit-keyframes anim1 { \n  0% { left: 0px; }\n  100% { left: 200px; }\n}\n\
body { -webkit-animation: anim1; -webkit-flex: 1 1 0px; display: -webkit-flex; color: red; -webkit-text-emphasis-style: dot; }\n\
body input { font-size: 12px; float: left; -webkit-appearance: none; }\n'
   )

obj.body.input.appearance = 'inherit'
obj.body.input.float = 'right'
result.update()


log(
  css(result),
  'regexp:float: right; -webkit-appearance: inherit;'
   )
