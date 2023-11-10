import { $ } from '@oplayer/core'

export const userName = $.css({
  'font-size': "1.2em",
  'font-weight': "500",
  'color': "#FFF",
  'text-decoration': "none",
})

export const time = $.css({
  'font-size': "0.9em",
  'font-weight': "300",
  'color': "#FFF",
})

export const tag = $.css({
  'font-weight': "500",
  'color': "#f0cf3e",
})

export const description = $.css({
  'padding-top': "0.5em",
  'font-weight': "400",
  'color': "#FFF",
})

export const progress = $.css(
  Object.assign(
    {
      'position': 'relative',
      'box-sizing': 'border-box',
      'padding': '6px 0px 4px',
      'width': '100%',
      'font-size': '0.75em',
    }
  )
)

