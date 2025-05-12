import React, { useState } from "react";
import './CompanyPage.css';

const TopBar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="logo">Minakano</div>
      <nav className="nav-menu">
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
              <a href="#">Mission</a>
              <a href="#">Vision</a>
              <a href="#">会社紹介</a>
              <a href="#">会社概要</a>
              <a href="#">会社役員</a>
            </div>
          )}
        </div>
        <a href="#">Services</a>
        <a href="#">News</a>
        <a href="#">Recruit</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

const CompanyPage = () => {
  return (
    <div className="company-page">
      <TopBar />
      {/* ヒーローセクション */}
      <section className="hero">
        <img src="https://placehold.jp/1200x400.png" alt="会社イメージ" className="hero-image" />
        <h1>株式会社ダミー</h1>
        <p>「つながりで世界をもっと楽しく」</p>
      </section>

      {/* 会社概要 */}
      <section className="company-info">
        <h2>会社概要</h2>
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

      {/* 沿革 */}
      <section className="history">
        <h2>沿革</h2>
        <ul>
          <li>2020年1月　株式会社ダミー設立</li>
          <li>2021年4月　新サービス「Dummy Connect」リリース</li>
          <li>2022年7月　本社を渋谷区に移転</li>
        </ul>
      </section>

      {/* 代表挨拶 */}
      <section className="message">
        <h2>代表挨拶</h2>
        <p>
          私たちは「つながりで世界をもっと楽しく」をミッションに掲げ、
          新しい価値を創造し続けます。今後ともご支援のほどよろしくお願いいたします。
        </p>
        <p className="ceo">代表取締役　山田 太郎</p>
      </section>

      {/* ビジョン・ミッション */}
      <section className="vision-mission">
        <h2>ビジョン・ミッション</h2>
        <p>
          ビジョン：人と人、人と社会をつなぐプラットフォームを創る<br />
          ミッション：テクノロジーで新しい「つながり」を生み出す
        </p>
      </section>
    </div>
  );
};

export default CompanyPage; 