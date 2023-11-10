import { $ } from '@oplayer/core'

import { UIInterface } from '../types'

import { progress, userName, time, description, tag } from './Title.style'

const render = (it: UIInterface, el: HTMLElement) => {
  const { config } = it
  if(!config.title) return

 

  const renderTags = (tags: {name: string, url: string}[]) => {
    let tagsDomStr = ""
    tags.forEach((item) => {
      tagsDomStr += `<a class="${tag}" href="${item.url}" target="_blank">#${item.name}</a>`
    })
    return tagsDomStr
  }


  const $dom = $.create(
    `div.${progress}`,
    {},
    `
    <div>
      <a class="${userName}" href="${config.title.userUrl}" target="_blank"> @${config.title.userName}</a>
      <span class="${time}"> · ${config.title.time}</span> 
    </div>

    ${
      config.title.description &&
      `<div class="${description}"> 
       ${config.title.description} 
        ${config.title.tags ? renderTags(config.title.tags) : ''}
      </div>`
    }
    `
  )


  $.render($dom, el)
}

export default render
