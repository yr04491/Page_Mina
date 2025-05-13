import React, { useState, useEffect, useRef } from "react";
import './CompanyPage.css';

const TopBar = ({ scrollToSection }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) setMobileNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownClick = (section) => {
    setAboutOpen(false);
    if (isMobile) setMobileNavOpen(false);
    requestAnimationFrame(() => {
      scrollToSection(section);
    });
  };

  return (
    <header className="topbar">
      <div className="logo">Minakano</div>
      <nav
        className={`nav-menu${isMobile && mobileNavOpen ? ' open' : ''}`}
        style={isMobile ? {} : { display: 'flex' }}
      >
        <div
          className="nav-item nav-about"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <a href="#" className={aboutOpen ? 'active' : ''}>
            About <span className="dropdown-arrow">▼</span>
          </a>
          {aboutOpen && (
            <div className="dropdown-menu">
              <a href="#" onClick={() => handleDropdownClick('mission')}>Mission</a>
              <a href="#" onClick={() => handleDropdownClick('vision')}>Vision</a>
              <a href="#" onClick={() => handleDropdownClick('about-company')}>会社紹介</a>
              <a href="#" onClick={() => handleDropdownClick('company-info')}>会社概要</a>
              <a href="#" onClick={() => handleDropdownClick('officers')}>会社役員</a>
            </div>
          )}
        </div>
        <a href="#">Services</a>
        <a href="#">News</a>
        <a href="#">Recruit</a>
        <a href="#">Contact</a>
      </nav>
      {isMobile && (
        <div
          className={`hamburger${mobileNavOpen ? ' open' : ''}`}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </header>
  );
};

const CompanyPage = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const aboutCompanyRef = useRef(null);
  const companyInfoRef = useRef(null);
  const officersRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      mission: missionRef,
      vision: visionRef,
      'about-company': aboutCompanyRef,
      'company-info': companyInfoRef,
      officers: officersRef,
    };
    const ref = refs[section];
    if (ref && ref.current) {
      const header = document.querySelector('.topbar');
      const headerHeight = header ? header.offsetHeight : 0;
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + scrollTop - headerHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="company-page">
      <TopBar scrollToSection={scrollToSection} />
      {/* ヒーローセクション */}
      <section className="hero">
        <img src="https://placehold.jp/1200x400.png" alt="会社イメージ" className="hero-image" />
        <h1>株式会社Minakano</h1>
        <p>「みんなの可能性を広げる」</p>
      </section>
      {/* Missionセクション */}
      <section ref={missionRef} className="mission-section">
        <h2>Mission</h2>
        <h3>みんなの可能性を広げる</h3>
        <p>私たちは、「誰⼀⼈取り残さない学び」を実現するために、</p>
        <p>すべての⼦どもたちが⾃分らしい成⻑を遂げられる環境づくりに取り組んでいます。</p>
        <p>学びに困難を感じている⼦ども、教室に居場所を⾒つけられない⼦どもにも、可能性は等しくあります。</p>
        <p>その可能性に気づき、伸ばすための"きっかけ"を届けることが、私たちの使命です。</p>
      </section>
      {/* Visionセクション */}
      <section ref={visionRef} className="vision-section">
        <h2>Vision</h2>
        <h3>生成AIを用いた個別最適な学びの実現</h3>
        <p>私たちは、高専在学中に生成AIの革新性に出会い、その未来に強く魅了されました。</p>
        <p>「すべての子どもがAIとともに学ぶ時代」を見据え、</p>
        <p>生成AIを使った学習支援を通して、個々に最適化された"自分だけの学び"を提供します。</p>
        <p>子どもたちがAIを使いこなす力を自然と身につけ、自分らしい未来を切り拓くことができる社会</p>
        <p>それが、私たちが目指すビジョンです。</p>
      </section>
      {/* 会社紹介セクション */}
      <section ref={aboutCompanyRef} className="about-company-section">
        <span className="card-label">会社紹介</span>
        <p>株式会社ミナカノは、<b>福井大学</b>の学生によって設立された、次世代の教育を切り拓く<b>スタートアップ企業</b>です。</p>
        <p>私たちは「<b>みんなの可能性を広げる</b>」をミッションに掲げ、不登校や学習困難といった課題に直面する子どもたち一人ひとりに寄り添いながら、自己肯定感と学力の向上を支援する革新的な教育システムを<b>開発・提供</b>しています。</p>
        <p>現代社会において、子どもたちが直面する学びの課題は多様化しています。私たちは、学校という枠組みだけでは十分にカバーできないニーズに応え、「<b>どこにいても、誰でも、自分らしく学べる</b>」環境をつくることを目指しています。</p>
        <p>そのために、<b>AI</b>やICTの技術を積極的に活用し、個々の学習スタイルやペースに合わせた最適なサポートを実現。子どもたちが自信を持って一歩を踏み出せるよう、自己発見と成長を促すプログラムを提供しています。</p>
        <p>また、私たちミナカノの強みは、現役大学生ならではの柔軟な発想力と行動力にあります。<b>社会課題</b>に真正面から向き合い、教育現場のリアルな声を取り入れながら、日々サービスの改良と<b>新しい挑戦</b>を続けています。</p>
        <p>これからも私たちは、すべての子どもたちの「<b>可能性</b>」に光を当てるために、仲間とともに成長し続け、<b>教育の未来</b>を切り拓いていきます。</p>
      </section>
      {/* 会社概要セクション */}
      <section ref={companyInfoRef} className="company-info">
        <span className="company-info-label">会社概要</span>
        <table>
          <tbody>
            <tr><th>会社名</th><td>株式会社ダミー</td></tr>
            <tr><th>設立</th><td>2020年1月1日</td></tr>
            <tr><th>所在地</th><td>東京都渋谷区ダミー1-2-3</td></tr>
            <tr><th>代表者</th><td>山田 太郎</td></tr>
            <tr><th>資本金</th><td>1,000万円</td></tr>
            <tr><th>事業内容</th><td>ITサービス、コンサルティング</td></tr>
          </tbody>
        </table>
      </section>
      {/* 会社役員セクション */}
      <section ref={officersRef} className="officers-section">
        <div className="officers-list">
          <div className="officer-card">
            <div>
              <img className="officer-photo" src="/images/CEO.png" alt="田濃 一翔" />
              <div className="officer-info">
                <div className="officer-name">田濃 一翔</div>
                <div className="officer-role">代表取締役CEO</div>
                <div className="officer-title">福井大学大学院</div>
                <div className="officer-title">工学研究科 在学</div>
              </div>
            </div>
            <div className="officer-message">
              私たちは、すべての⼦どもたちが「<b>⾃分に合った学び</b>」に出会える社会を⽬指しています。<br />
              ⾼専での学びの中で<b>⽣成AI</b>と出会った私たちは、その可能性に⼤きな希望を感じました。<br />
              これからの時代、⽣成AIを「<b>使いこなす⼒</b>」は読み書きと同じくらい重要なスキルになると確信しています。<br />
              だからこそ、⼦どもたちが早い段階からAIと⾃然に関わり、<br />
              ⾃分の学びを<b>⾃分で広げていける</b>環境が必要です。<br />
              私たちは、⽣成AIを活⽤した学習⽀援を通じて、誰もが⾃分らしく学び、<br />
              可能性を伸ばせる未来への"<b>架け橋</b>"となることを⽬指します。
            </div>
          </div>
          <div className="officer-card">
            <div>
              <img className="officer-photo" src="/images/CMO.png" alt="青木 愛一郎" />
              <div className="officer-info">
                <div className="officer-name">青木 愛一郎</div>
                <div className="officer-role">取締役CMO</div>
                <div className="officer-title">福井大学</div>
                <div className="officer-title">教育学部 在学</div>
              </div>
            </div>
            <div className="officer-message">
              私たちは、教育の現場で⼦どもたち<b>⼀⼈ひとり</b>と向き合う中で、<br />
              「学びにつまずいた⼦どもが、必要な⽀援を受けられずに取り残されている」という厳しい<b>現実</b>に直⾯しました。<br />
              教育現場での経験を通じて、そうした⼦どもたちのまなざしに出会い、私たちは深く⼼を動かされました。<br />
              その経験が、私たちの<b>出発点</b>です。<br />
              誰もが⾃分のペースで、⾃分らしく学べること。<br />
              そして、困難を抱える⼦どもも、安⼼して学びに向かえること。<br />
              そんな「<b>誰⼀⼈取り残さない</b>」個別最適な学びの実現と、包摂的な教育環境の構築を⽬指して、<br />
              私たちはAIと⼈の⼒を融合させた新しい<b>教育のかたち</b>をつくっています。<br />
              学ぶことが「できる・できない」ではなく、「楽しい・わかる・つながる」未来へ。<br />
              私たちは、すべての⼦どもの<b>可能性を広げ</b>、その⼀歩を⽀え続けます。
            </div>
          </div>
        </div>
      </section>
      {/* 沿革 */}
      <section className="history">
        <span className="card-label">沿革</span>
        <ul>
          <li>2020年1月　株式会社ダミー設立</li>
          <li>2021年4月　新サービス「Dummy Connect」リリース</li>
          <li>2022年7月　本社を渋谷区に移転</li>
        </ul>
      </section>
    </div>
  );
};

export default CompanyPage; 