var obj = {
  '@keyframes anim1':{
    '0%': { left: '0' },
    '100%': { left: '200px' }
  },
  body:{
    animationName: 'anim1',
    flex:1,
    display: 'flex',
    color:'red',
    textEmphasisStyle:'dot', imeAlign:'auto',
    input:{
      float: 'left',
      fontSize:'12px',
      appearance: 'none'
    }
  }
}

var result = cssobj(obj)

log(
  css(result),
  '@-webkit-keyframes anim1 { \n  0% { left: 0px; }\n  100% { left: 200px; }\n}\n\
body { -webkit-animation: anim1; -webkit-flex: 1 1 0px; display: -webkit-flex; color: red; -webkit-text-emphasis-style: dot; }\n\
body input { float: left; font-size: 12px; -webkit-appearance: none; }\n'
   )

obj.body.input.appearance = 'inherit'
result.update()


log(
  css(result),
  'regexp:-webkit-appearance: inherit;'
   )
