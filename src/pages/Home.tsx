import { useState } from 'react'
import { WaAnimation, WaButton, WaCallout, WaCard, WaIcon } from '@awesome.me/webawesome/dist/react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wa-stack wa-align-items-stretch">
        <div className="wa-stack wa-align-items-center">
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
          </div>
          <h1 className="wa-align-items-center">
            <WaIcon name="rocket" className="icon-spacing"/>
            Web Awesome 3 + Vite + React
            <WaIcon name="globe" className="icon-spacing"/>
          </h1>

          <div className="animation-overview">
            <WaAnimation name="bounce" duration={2000} play><div className="box"></div></WaAnimation>
            <WaAnimation name="jello" duration={2000} play><div className="box"></div></WaAnimation>
            <WaAnimation name="heartBeat" duration={2000} play><div className="box"></div></WaAnimation>
            <WaAnimation name="flip" duration={2000} play><div className="box"></div></WaAnimation>
          </div>

          <WaButton onClick={() => setCount((count) => count + 1)}>
            <WaIcon name="heart"/> count is {count}
          </WaButton>
          <p>
            <WaIcon name="code"/> Edit <code>src/pages/Home.tsx</code> and save to test HMR
          </p>
        </div>

        <WaCallout variant="brand">
          <WaIcon slot="icon" name="circle-info"/>
          <strong>This is super informative</strong><br />
          You can tell by how pretty the callout is.
        </WaCallout>

        <WaCallout variant="success">
          <WaIcon slot="icon" name="circle-check"/>
          <strong>Your changes have been saved</strong><br />
          You can safely exit the app now.
        </WaCallout>

        <WaCallout variant="neutral">
          <WaIcon slot="icon" name="gear"/>
          <strong>Your settings have been updated</strong><br />
          Settings will take effect on next login.
        </WaCallout>

        <WaCallout variant="warning">
          <WaIcon slot="icon" name="triangle-exclamation"/>
          <strong>Your session has ended</strong><br />
          Please login again to continue.
        </WaCallout>

        <WaCallout variant="danger">
          <WaIcon slot="icon" name="circle-exclamation"/>
          <strong>Your account has been deleted</strong><br />
          We're very sorry to see you go!
        </WaCallout>

        <div className="wa-stack wa-align-items-center">
          <h2>
            <WaIcon name="star"/> Web Awesome Features
          </h2>
          <ul className="list-style-none">
            <li><WaIcon name="rocket"/> Lightning fast icon rendering</li>
            <li><WaIcon name="heart"/> Beautiful, scalable vector icons</li>
            <li><WaIcon name="code"/> Easy React integration</li>
            <li><WaIcon name="globe"/> Thousands of icons available</li>
          </ul>
        </div>

        <div className="wa-grid">
          <WaCard className="card-media">
            <div slot="media" className="wa-frame:landscape">
              <img
                src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                alt="A kitten walks towards camera on top of pallet."
              />
            </div>
            This card has an image of a kitten walking along a pallet. 
          </WaCard>
          <WaCard className="card-media">
            <video slot="media" controls>
              <source src="https://uploads.webawesome.com/dog-with-glasses.mp4"/>
              <p>Your browser doesn't support HTML video</p>
            </video>
            This card has a video of a dog wearing shades.
          </WaCard>
          <WaCard className="card-media">
            <div slot="media" className="wa-frame:landscape">
              <img
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Orange tabby cat resting peacefully."
              />
            </div>
            This card features an orange tabby cat in a peaceful resting pose.
          </WaCard>
          <WaCard className="card-media">
            <div slot="media" className="wa-frame:landscape">
              <img
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Beautiful landscape with mountains and lake."
              />
            </div>
            This card shows a stunning mountain landscape reflected in a serene lake.
          </WaCard>
        </div>
      </div>
    </>
  )
}

export default Home