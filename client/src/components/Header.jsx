import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src="/src/assets/homepage_hero.jpg" alt="homepageHeader" />
    </div>
  )
}

export default Header