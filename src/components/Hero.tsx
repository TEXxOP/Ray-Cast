'use client';

import BorderGlow from './BorderGlow';
import GradientBlinds from './GradientBlinds';

export default function Hero() {
  return (
    <div className="page_hero__Dwaih">
      <div className="page_heroText___VRvH page_fadeInUp__yDeSr">
        <h1>Your shortcut to everything.</h1>
        <p className="page_fadeInUpStagger__UbVUU">
          <span data-br="_R_129bsnr3b_" data-brr="1" style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>
            A collection of powerful productivity tools all within an extendable launcher. Fast, ergonomic and reliable.
          </span>
        </p>
      </div>

      <div className="HeroDownloadInfo_container__QTM_P">
        <div className="HeroDownloadInfo_buttonContainer__jiu_t">
          <a className="Button_button__JJiqJ Button_light__KdYEB" aria-disabled="false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"></path></svg>
            Download for Mac
          </a>
          <a className="Button_button__JJiqJ Button_light__KdYEB" aria-disabled="false" href="https://ray.so/download-windows">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M0 0h7.584v7.584H0zm8.416 0h7.583v7.584H8.416zm-.832 8.416H0V16h7.584zm.832 0h7.583V16H8.416z" clipRule="evenodd"></path></svg>
            Download for Windows (beta)
          </a>
        </div>
        <div className="HeroDownloadInfo_sub__uJ70w">
          <span>v1.104.19</span>
          <span>macOS 13+</span>
          <span><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_749bsnr3b_" data-state="closed">Install via homebrew</button></span>
        </div>
      </div>

      <div className="HeroAnnouncement_announcementContainer__hJe_K">
        <div className="HeroAnnouncement_announcementOuter__T5qC1">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="transparent"
            borderRadius={28}
            glowRadius={20}
            glowIntensity={1.0}
            coneSpread={25}
            animated={true}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
          >
            <a className="HeroAnnouncement_announcement__TOQds" rel="external" href="/new" style={{ border: 'none' }}>
              <span>Try the new Raycast</span>
              <span className="HeroAnnouncement_muted__SLMsc">
                Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"></path></svg>
              </span>
            </a>
          </BorderGlow>
        </div>
      </div>

      <div className="page_heroBackground__MQqbj" style={{ maxWidth: 'none', width: '100vw', background: '#000000' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.85 }}>
          <GradientBlinds
            gradientColors={['#ff3333', '#cc0000', '#660000', '#1a0000', '#000000']}
            angle={35}
            noise={0.6}
            blindCount={6}
            blindMinWidth={100}
            spotlightRadius={0.7}
            spotlightSoftness={1.5}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="normal"
          />
        </div>
      </div>
    </div>
  );
}
