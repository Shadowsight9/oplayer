import { $ } from '@oplayer/core'
import { controllerHidden, icon, tooltip } from '../style'


import type { UIInterface } from '../types'

import { controllers, statisticIcon } from './ControllerRight.style'

export const controllerBottomWrap = $.css({
  'position': 'absolute',
  'top': 0,
  'bottom': 0,
  'right': 0,
  'z-index': 6,
  'padding': '1em 0',
  'transition': 'transform 0.3s ease, padding 0.3s ease',
  '&::before': {
    'position': 'absolute',
    'content': "''",
    'width': '100%',
    'display': 'block',
    'top': 0,
    'bottom': 0,
    'z-index': -1,
    'transition': 'opacity 0.3s ease',
    'pointer-events': 'none',
    'background-image': 'linear-gradient(to right, transparent, rgba(0, 0, 0, .3))'
  },

  [`@global .${controllerHidden} &`]: {
    'padding': 0,
    'pointer-events': 'none',
    'transform': 'translateX(calc(100% - 8px))',
    '&::before': { 'opacity': 0 }
  }
})

const render = (it: UIInterface, $el: HTMLDivElement) => {
  const { player, config } = it

  if(!config.rightController) return

  const {items,onClick} = config.rightController
  const el = $.render($.create(`div.${controllerBottomWrap}`), $el)

  const renderStatisticIcon = (name: string, iconSvg: string, text: string) => {
    return `
    <div class="${statisticIcon}">
      <button class="${icon} ${tooltip}" aria-label="${name}">
        ${iconSvg}
      </button>
      <span>${text}</span>
    </div>
    `
  }

  const $dom  = $.create(
    `div.${controllers}`,
    {},
    items.map(it => renderStatisticIcon(it.name, it.iconSvg, it.defaultText)).join("")
  )


  const $statisticElements = items.map(it => ({
    name: it.name,
    dom: $dom.querySelector<HTMLDivElement>(`button[aria-label="${it.name}"] + span`)!
  }))

  player.on('statisticchange', ({ payload }) => {
    const $ele = $statisticElements.find(it => it.name == payload.name)!.dom
    $ele.textContent = payload.value
  })

  $dom.addEventListener('click', (e: Event) => {
    const target = e.target! as HTMLDivElement
    const label = target.getAttribute('aria-label')
    label && onClick(label)
  })


  $.render($dom, el)
}

export default render
