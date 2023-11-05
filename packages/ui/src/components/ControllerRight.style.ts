import { $, isMobile } from '@oplayer/core'
import { icon } from '../style'


export const statisticIcon = $.css({
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'center',
  'align-items': 'center',
  [`& > span`]: {
    'font-size': '0.8em',
  }
})

export const controllers = $.css({
  color: '#fff',
  fill: '#fff',
  height: '100%',
  
  'display': 'flex',
  'box-sizing': 'border-box',
  'flex-direction': 'column',
  'justify-content': 'end',
  'align-items': 'center',
  'padding-bottom': '50px',
  'gap': '10px',


  [`& .${icon}`]: Object.assign(
    {
      'width': '3em',
      'height': '3em',
      'justify-content': 'center',
      'align-items': 'center',
      'display': 'inline-flex',
      'border-radius': '50%',

      '& > *': {
        'height': '1.5em',
        'width': '1.5em',
        'pointer-events': 'none',
        'transition': 'transform .2s ease-in-out'
      }
    },
    isMobile
      ? { '&:active > *': { transform: 'scale(.9)' } }
      : { '&:hover': { 'background-color': 'rgb(255 255 255 / .2)' } }
  )
})
