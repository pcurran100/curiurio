import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import './App.css'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

function App() {
  const asset = (path) => `https://coveomusic.com${path}`
  const baseUrl = import.meta.env.BASE_URL
  const localAsset = (path) => `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`
  const [email, setEmail] = useState('')
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' })

  const carouselItems = [
    {
      index: 0,
      title: 'Antikythera Mechanism',
      artwork: localAsset('/Antikytheramechanism.png'),
      url: 'https://en.wikipedia.org/wiki/Antikythera_mechanism',
      colour: '#030303',
      featured: false,
    },
    {
      index: 1,
      title: 'Markov Chain Choir',
      artwork: localAsset('/Markov.png'),
      url: 'https://www.youtube.com/watch?v=KZeIEiBrT_w',
      colour: '#1A303D',
      featured: false,
    },
    {
      index: 2,
      title: 'Low IQ Video',
      artwork: asset('/assets/releases/memoriesweshare/memoriesweshare-140.jpg'),
      url: 'https://www.youtube.com/watch?v=fjDXvXACIEA',
      colour: 'linear-gradient(180deg, #FBE0C9 0%, #F1C2B8 33.33%, #EEB5C6 66.67%, #CCBFE4 100%)',
      featured: false,
    },
    {
      index: 3,
      title: 'Voyager Golden Record',
      artwork: localAsset('/VoyagerGoldenRecord.png'),
      url: 'https://en.wikipedia.org/wiki/Voyager_Golden_Record',
      colour: 'rgba(255,255,255,0.8)',
      featured: false,
    },
    {
      index: 4,
      title: 'Powers of Ten',
      artwork: asset('/assets/releases/chapter-i/chapter-i-140.jpg'),
      url: 'https://www.youtube.com/watch?v=0fKBhvDjuy0',
      colour: '#575F2E',
      featured: false,
    },
    {
      index: 5,
      title: 'Rotating Bodies',
      artwork: asset('/assets/releases/elouise/elouise-140.jpg'),
      url: 'https://www.youtube.com/watch?v=1VPfZ_XzisU',
      colour: '#23426F',
      featured: false,
    },
    {
      index: 6,
      title: 'The Bloop',
      artwork: localAsset('/Bloop.png'),
      url: 'https://en.wikipedia.org/wiki/Bloop',
      colour: '#F7BBCA',
      featured: false,
    },
    {
      index: 7,
      title: 'Shipping Forecast',
      artwork: localAsset('/Shippingforecast.png'),
      url: 'https://youtu.be/CxHa5KaMBcM?si=RDZpJXke_x_ND6mz',
      colour: '#201A40',
      featured: false,
    },
    {
      index: 8,
      title: 'Hotels ad',
      artwork: asset('/assets/releases/just-a-memory-stripped/just-a-memory-stripped-140.jpg'),
      url: 'https://www.youtube.com/watch?v=Uj3_KqkI9Zo',
      colour: '#E7E5DE',
      featured: false,
    },
    {
      index: 9,
      title: 'Balloonfest ’86',
      artwork: localAsset('/GreatBalloonFest.png'),
      url: 'https://en.wikipedia.org/wiki/Balloonfest_%2786',
      colour: '#8DC5E6',
      featured: false,
    },
    {
      index: 10,
      title: 'hold out hope',
      artwork: asset('/assets/releases/hold-out-hope/hold-out-hope-140.jpg'),
      url: 'https://coveomusic.com/hold-out-hope',
      colour: '#DFE9F3',
      featured: true,
    },
    {
      index: 11,
      title: 'My Dreams of You',
      artwork: asset('/assets/releases/mydreamsofyou/mydreamsofyou-140.jpg'),
      url: 'https://coveomusic.com/mydreamsofyou',
      colour: '#030303',
      featured: false,
    },
    {
      index: 12,
      title: 'Voynich Manuscript',
      artwork: localAsset('/Scroll.png'),
      url: 'https://en.wikipedia.org/wiki/Voynich_manuscript',
      colour: '#1A303D',
      featured: false,
    },
    {
      index: 13,
      title: 'Memories We Share',
      artwork: asset('/assets/releases/memoriesweshare/memoriesweshare-140.jpg'),
      url: 'https://coveomusic.com/memoriesweshare',
      colour: 'linear-gradient(180deg, #FBE0C9 0%, #F1C2B8 33.33%, #EEB5C6 66.67%, #CCBFE4 100%)',
      featured: false,
    },
    {
      index: 14,
      title: 'You and I',
      artwork: asset('/assets/releases/youandi/youandi-140.jpg'),
      url: 'https://coveomusic.com/youandi',
      colour: 'rgba(255,255,255,0.8)',
      featured: false,
    },
    {
      index: 15,
      title: 'Fela Kuti',
      artwork: localAsset('/FelaKuti.png'),
      url: 'https://en.wikipedia.org/wiki/Fela_Kuti',
      colour: '#575F2E',
      featured: false,
    },
    {
      index: 16,
      title: 'Elouise',
      artwork: asset('/assets/releases/elouise/elouise-140.jpg'),
      url: 'https://coveomusic.com/elouise',
      colour: '#23426F',
      featured: false,
    },
    {
      index: 17,
      title: 'Still Dreaming',
      artwork: asset('/assets/releases/still-dreaming/still-dreaming-140.jpg'),
      url: 'https://coveomusic.com/still-dreaming',
      colour: '#F7BBCA',
      featured: false,
    },
    {
      index: 18,
      title: 'Project Azorian',
      artwork: localAsset('/ProjectAzorian.png'),
      url: 'https://en.wikipedia.org/wiki/Project_Azorian',
      colour: '#201A40',
      featured: false,
    },
    {
      index: 19,
      title: 'Just a Memory (Stripped)',
      artwork: asset('/assets/releases/just-a-memory-stripped/just-a-memory-stripped-140.jpg'),
      url: 'https://coveomusic.com/just-a-memory-stripped',
      colour: '#E7E5DE',
      featured: false,
    },
    {
      index: 20,
      title: 'wanna get to know you',
      artwork: asset('/assets/releases/wanna-get-to-know-you/wanna-get-to-know-you-140.jpg'),
      url: 'https://coveomusic.com/wanna-get-to-know-you',
      colour: '#8DC5E6',
      featured: false,
    },
    {
      index: 21,
      title: 'hold out hope',
      artwork: asset('/assets/releases/hold-out-hope/hold-out-hope-140.jpg'),
      url: 'https://coveomusic.com/hold-out-hope',
      colour: '#DFE9F3',
      featured: true,
    },
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!supabase) {
      setSubmitState({
        status: 'error',
        message: 'Wait list is not configured yet.',
      })
      return
    }

    try {
      setSubmitState({ status: 'submitting', message: '' })
      
      const { error } = await supabase
        .from('users')
        .insert([{ email }])

      if (error) {
        // Handle duplicate email error gracefully
        if (error.code === '23505') {
          setSubmitState({
            status: 'success',
            message: 'You\'re already on the wait list!',
          })
          setEmail('')
          return
        }
        throw error
      }

      setEmail('')
      setSubmitState({
        status: 'success',
        message: 'Thanks! We added you to the wait list.',
      })
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
      })
    }
  }

  return (
    <div className="page">
      <div className="carouselContainer">
        <div className="waitlistBanner">
          <p className="waitlistBanner__title uppercase mono">Join the wait list</p>
          <form
            className="waitlistBanner__form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="waitlist-banner-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="waitlist-banner-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              className="btn btn__blurred dark mono"
              disabled={submitState.status === 'submitting'}
            >
              Notify Me
            </button>
          </form>
          {submitState.message ? (
            <p
              className={`waitlistBanner__feedback ${
                submitState.status === 'error' ? 'waitlistBanner__feedback--error' : ''
              }`}
            >
              {submitState.message}
            </p>
          ) : null}
        </div>
        <div className="heroScript" aria-hidden="true">
          <HeroScript />
        </div>
        <p className="mono previewText muted">
          <span className="desktop">Click icons to learn something new</span>
          <span className="mobile">Tap icons to learn something new</span>
        </p>
        <div className="intro">
          <div className="logoVideoWrapper">
            <video className="logoVideo" src={localAsset('/logo.mp4')} autoPlay loop muted playsInline />
          </div>
        </div>
        <div className="fade" />
        <div className="carousel" style={{ '--itemCount': carouselItems.length }}>
          {carouselItems.map((item) => (
            <a
              key={item.index}
              className={`release ${item.featured ? 'featuredRelease' : ''}`}
              style={{ '--item': item.index, '--vinylColour': item.colour }}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.title}
            >
              <img src={item.artwork} alt={`${item.title} artwork`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeroScript() {
  return (
    <svg viewBox="0 0 1285 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M110.5 50.5045C110.5 50.5045 50 112 23.0001 142.005C-3.99987 172.009 -2.49995 190.605 41.5 161.005C96.5 124.005 212 31.0045 227 7.50452C242 -15.9955 98.5 133.005 79.5 157.005C60.5 181.005 123.5 123.505 128 126.505C132.5 129.505 110 167.004 135.5 157.005C161 147.005 211 98.5046 217 105.005C223 111.505 198 132.005 192.5 126.505C185.895 119.9 176 153.005 196 142.005C211.705 133.367 282 101.005 289 99.0046C296 97.0046 249 155.244 249.5 136.005" strokeLinecap="butt" />
        <path d="M289.63 127.003C306.964 118.836 337.23 102.403 319.63 102.003C297.63 101.503 261.13 165.503 303.63 140.503C337.63 120.503 343.13 113.836 341.63 113.003" strokeLinecap="butt" />
        <path d="M7.5 85.5C63.3333 83.5 185 78.2 225 73" strokeLinecap="butt" />
        <path d="M445 119C445 119 451 109.5 446.5 108.5C442 107.5 386.6 132.7 395 141.5C405.5 152.5 428.5 132.5 432 129.5C435.5 126.5 407.5 148.5 425 145C442.5 141.5 514 101.5 514 94.5C514 87.5 498.5 99.5 508.5 114.5C518.5 129.5 470 138 486 145C502 152 572.486 113.195 568 107C557.5 92.5 500 151 535.5 141.5C563.9 133.9 586 120.333 593.5 114.5" strokeLinecap="butt" />
        <path d="M640 133C658 119 693.7 93.4 692.5 103C691 115 677 129 651.5 150C626 171 686.5 111.5 699.5 116.5C712.5 121.5 700 136 695 141C690 146 729 108 729.5 120.5C730 133 706 157.5 737 141C768 124.5 808 90.5 800 105.5C792 120.5 769.5 152.5 795 136.5C820.5 120.5 847 101 848.5 96.5C850 92 689.5 239 699.5 255" strokeLinecap="butt" />
        <path d="M890.5 129.5C912 116.333 954.6 91.9 953 99.5C951 109 923.5 135.5 920 140C916.5 144.5 1049.5 56 1055 42.5C1060.5 29 953 139 968.5 152.5" strokeLinecap="butt" />
        <path d="M1044 104C1027.17 111.5 995 129.8 1001 143C1008.5 159.5 1026 111.5 1044 112C1062 112.5 1105 94.5 1104.5 85.5C1104 76.5 1088 104.5 1098 112C1108 119.5 1052 143 1075 143C1098 143 1161 97 1169.5 97.5C1178 98 1136 122 1143 132.5" strokeLinecap="butt" />
        <path d="M1184 75C1180.5 78.1667 1173.9 85.2 1175.5 88" strokeLinecap="butt" />
        <path d="M1187.5 120.5C1203.33 113.667 1231 99.9 1215 99.5C1195 99 1160 153.5 1187.5 137C1215 120.5 1268 94 1277 94C1286 94 1241.5 143.5 1241.5 129.5" strokeLinecap="butt" />
        <path d="M951 71.5C989.167 65.5 1071.3 54.3 1094.5 57.5" strokeLinecap="butt" />
      </g>
    </svg>
  )
}

export default App
