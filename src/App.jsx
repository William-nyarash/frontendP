// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
 <div>
      <body>
        <main>
          <navbar>
          <ul className='nav'>
            <li id="live">live session</li>
            <li id="cartegories">cartegory</li>
            <li id="about">about</li>
            <li id="story">stories</li>
            <li id="refer">reference</li>
          </ul>
          </navbar>
          <section className='vida'>
            <div className='video'>
              <image src="src/assets/download.png" alt="playbutton"></image>
            </div>
            <div className='video'>
            <image src="src/assets/download.png" alt="playbutton"></image>
            </div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cumque rem quae consectetur placeat ullam commodi reiciendis ab error. Atque ex ullam vero optio, itaque fugit eligendi excepturi rem animi.</div>
          </section>
          <section className='category'>
            <div className='c-child first'>
              drug 
            </div>
            <div className='c-child sec'>
              alcohol
            </div>
            <div className='c-child third'>
              stress
            </div>
          </section>
          <section>
            <h2>about</h2>
            <p>
            Educational Resources: The website offers articles, videos, and other content to educate visitors about various mental health conditions, symptoms, and treatments.
            </p>
            <p>
            Support Networks: It provides information on how to find and join support groups, both online and offline, to connect with others experiencing similar issues.
            </p>
            <p>
            Professional Help: The site usually includes directories or links to mental health professionals, such as therapists, counselors, and psychiatrists, along with guidance on how to choose the right professional for individual needs.
            </p>
            <p>
            Awareness Campaigns: It runs or promotes campaigns to reduce the stigma surrounding mental health issues, encouraging open conversations and understanding.
            </p>
            <p>
            Self-Help Tools: The website might offer self-assessment quizzes, mindfulness exercises, and other tools to help individuals manage their mental health on their own.
            </p>
            <p>
            Community Stories: Sharing personal stories from people who have experienced mental health challenges can provide support and inspiration to others.
            </p>
            <p>
            Events and Webinars: Hosting or promoting events, such as webinars, workshops, and conferences, to foster learning and community engagement.
            </p>
          </section>
          <section className='story-sec'>
            <p>stories</p>
            <div className='stories'>
              <p>rising from murky waters of alcoholism</p>
              <h3>mwendwa mbaabu</h3>
              <p> I was angry at my dad for he turned mum into his punching bag. His dranken stupors and how he stuggered home after his drinking sprees embarased me. </p>
            </div>
            <div className='stories'>
              <h3>Gabi &apos;s story: my struggle with speaking up about my depression and loneliness</h3>
              <p>
My name’s Gabi and I’m in my early thirties. A milestone birthday made me feel lonely even though I was surrounded by loved ones. My experience of loneliness spiralled into depression but looking back on this period, I can see how talking to people helped my recovery.
</p>
            </div>
          </section>
          <section className='footer'>
            <p>reference</p>
            <ul>
              <li>nation media</li>
              <li>unsplash</li>
            </ul>
          </section>
        </main>
      </body>
 </div>
  )
}

export default App
