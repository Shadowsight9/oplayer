import { createRoot } from 'react-dom/client'
import React from 'react'
import Player from '@oplayer/react'
import hls from '@oplayer/hls'
import ui from 'oplayer-ui-plus'
import { vttThumbnails } from '@oplayer/plugins'




const ui2 = ui({
  rightController: {
    items: [
      {
        name: "string",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 99 99" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_492"><rect width="99" height="99" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_492)"><g transform="matrix(0.6616870760917664,0,0,0.6616870760917664,76.31503295898438,52.850440979003906)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(3,0,0,3,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4.644999980926514,4.482999801635742 C-7.25,7.818999767303467 -13.482000350952148,8.300000190734863 -13.482000350952148,8.300000190734863 C-13.482000350952148,8.300000190734863 -14.413999557495117,11.48799991607666 -12.135000228881836,10.821000099182129 C-9.855999946594238,10.154000282287598 -7.25,8.152000427246094 -4.644999980926514,4.482999801635742z M-17.36,-1.04 C-17.36,-0.16 -18.07,0.56 -18.96,0.56 C-18.96,0.56 -18.96,0.56 -18.96,0.56 C-19.85,0.56 -20.57,-0.16 -20.57,-1.04 C-20.57,-1.92 -19.85,-2.64 -18.96,-2.64 C-18.07,-2.64 -17.36,-1.92 -17.36,-1.04z M-11.89,-1.04 C-11.89,-0.16 -12.61,0.56 -13.5,0.56 C-13.5,0.56 -13.5,0.56 -13.5,0.56 C-14.39,0.56 -15.11,-0.16 -15.11,-1.04 C-15.11,-1.92 -14.39,-2.64 -13.5,-2.64 C-12.61,-2.64 -11.89,-1.92 -11.89,-1.04z M-6.43,-1.04 C-6.43,-0.16 -7.15,0.56 -8.04,0.56 C-8.04,0.56 -8.04,0.56 -8.04,0.56 C-8.92,0.56 -9.64,-0.16 -9.64,-1.04 C-9.64,-1.92 -8.92,-2.64 -8.04,-2.64 C-7.15,-2.64 -6.43,-1.92 -6.43,-1.04z M-5.79,5.98 C-3.56,3.75 -2.25,1.42 -2.25,-1.29 C-2.25,-6.79 -7.29,-11.25 -13.5,-11.25 C-19.71,-11.25 -24.75,-6.79 -24.75,-1.29 C-24.75,4.21 -19.55,7.99 -13.34,7.99 C-13.34,7.99 -13.34,11.06 -13.34,11.06 C-13.34,11.06 -8.51,8.72 -5.79,5.98z"></path><g opacity="1" transform="matrix(1,0,0,1,-6.75,-7.456999778747559)"><g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g><g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g><g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g><g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g></g></g></g></g></svg>`,
        defaultText: "string",
    }
    ],
    onClick: (name: string) => {
      console.log(name)
    }
  },
  title: {
    userName: 'Oplayer',
    time:"dsadasdsa",
    description: 'Oplayer is a video player based on hls.js and react',
    
  }

})

const App: React.FC = () => {
  return (
    <Player
      source={{
        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        poster: 'https://oplayer.vercel.app/poster.png'
      }}
      plugins={[
        ui2,
        hls(),
        vttThumbnails({
          src: 'https://preview.zorores.com/4b/4b1a02c7ffcad4f1ee11cd6f474548cb/thumbnails/sprite.vtt'
        })
      ]}
    />
  )
}

createRoot(document.getElementById('root')!).render(<App />)
