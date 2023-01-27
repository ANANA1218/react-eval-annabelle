import React from 'react';


class Home extends React.Component {
    
 
  render() {
   
    return (
     
      <div className="maincontainer">
        <div id="preloder">
    <div className="loader"></div>
    </div>
    
    <header className="header-section">
    <div className="container">
    
    <a className="site-logo" href="#">
    <img src="assets/img/logo.png" alt="" />
    </a>
    <div className="user-panel">
    <a href="#">Login</a> / <a href="#">Register</a>
    </div>
    
    <div className="nav-switch">
    <i className="fa fa-bars"></i>
    </div>
    
    <nav className="main-menu">
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Games</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Forums</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    </nav>
    </div>
    </header>

    
    <div className="latest-news-section">
    <div className="ln-title">Latest News</div>
    <div className="news-ticker">
    <div className="news-ticker-contant">
    <div className="nt-item"><span className="new">new</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
    <div className="nt-item"><span className="strategy">strategy</span>Isum dolor sit amet, consectetur adipiscing elit. </div>
    <div className="nt-item"><span className="racing">racing</span>Isum dolor sit amet, consectetur adipiscing elit. </div>
    </div>
    </div>
    </div>
    
    
    <section className="feature-section spad">
    <div className="container">
    <div className="row">
    <div className="col-lg-3 col-md-6 p-0">
    <div className="feature-item set-bg" data-setbg="assets/img/features/1.jpg">
    <span className="cata new">new</span>
    <div className="fi-content text-white">
    <h5><a href="#">Suspendisse ut justo tem por, rutrum</a></h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <a href="#" className="fi-comment">3 Comments</a>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6 p-0">
    <div className="feature-item set-bg" data-setbg="assets/img/features/2.jpg">
    <span className="cata strategy">strategy</span>
    <div className="fi-content text-white">
    <h5><a href="#">Justo tempor, rutrum erat id, molestie</a></h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <a href="#" className="fi-comment">3 Comments</a>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6 p-0">
    <div className="feature-item set-bg" data-setbg="assets/img/features/3.jpg">
    <span className="cata new">new</span>
    <div className="fi-content text-white">
    <h5><a href="#">Nullam lacinia ex eleifend orci porttitor</a></h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <a href="#" className="fi-comment">3 Comments</a>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6 p-0">
    <div className="feature-item set-bg" data-setbg="assets/img/features/4.jpg">
    <span className="cata racing">racing</span>
    <div className="fi-content text-white">
    <h5><a href="#">Lacinia ex eleifend orci suscipit</a></h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <a href="#" className="fi-comment">3 Comments</a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    
    <section className="recent-game-section spad set-bg" data-setbg="assets/img/recent-game-bg.png">
    <div className="container">
    <div className="section-title">
    <div className="cata new">new</div>
    <h2>Recent Games</h2>
    </div>
    <div className="row">
    <div className="col-lg-4 col-md-6">
    <div className="recent-game-item">
    <div className="rgi-thumb set-bg" data-setbg="assets/img/recent-game/1.jpg">
    <div className="cata new">new</div>
    </div>
    <div className="rgi-content">
    <h5>Suspendisse ut justo tem por, rutrum</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
    <a href="#" className="comment">3 Comments</a>
    <div className="rgi-extra">
    <div className="rgi-star"><img src="assets/img/icons/star.png" alt="" /></div>
    <div className="rgi-heart"><img src="assets/img/icons/heart.png" alt="" /></div>
    </div>
    </div>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="recent-game-item">
    <div className="rgi-thumb set-bg" data-setbg="assets/img/recent-game/2.jpg">
    <div className="cata racing">racing</div>
    </div>
    <div className="rgi-content">
    <h5>Susce pulvinar metus nulla, vel facilisis sem </h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
    <a href="#" className="comment">3 Comments</a>
    <div className="rgi-extra">
    <div className="rgi-star"><img src="assets/img/icons/star.png" alt="" /></div>
    <div className="rgi-heart"><img src="assets/img/icons/heart.png" alt="" /></div>
    </div>
    </div>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="recent-game-item">
    <div className="rgi-thumb set-bg" data-setbg="assets/img/recent-game/3.jpg">
    <div className="cata adventure">Adventure</div>
    </div>
    <div className="rgi-content">
    <h5>Suspendisse ut justo tem por, rutrum</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
    <a href="#" className="comment">3 Comments</a>
    <div className="rgi-extra">
    <div className="rgi-star"><img src="assets/img/icons/star.png" alt="" /></div>
    <div className="rgi-heart"><img src="assets/img/icons/heart.png" alt="" /></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    
    <section className="tournaments-section spad">
    <div className="container">
    <div className="tournament-title">Tournaments</div>
    <div className="row">
    <div className="col-md-6">
    <div className="tournament-item mb-4 mb-lg-0">
    <div className="ti-notic">Premium Tournament</div>
    <div className="ti-content">
    <div className="ti-thumb set-bg" data-setbg="assets/img/tournament/1.jpg"></div>
    <div className="ti-text">
    <h4>World Of WarCraft</h4>
    <ul>
    <li><span>Tournament Beggins:</span> June 20, 2018</li>
    <li><span>Tounament Ends:</span> July 01, 2018</li>
    <li><span>Participants:</span> 10 teams</li>
    <li><span>Tournament Author:</span> Admin</li>
    </ul>
    <p><span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd place: $500</p>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-6">
    <div className="tournament-item">
    <div className="ti-notic">Premium Tournament</div>
    <div className="ti-content">
    <div className="ti-thumb set-bg" data-setbg="assets/img/tournament/2.jpg"></div>
    <div className="ti-text">
    <h4>DOOM</h4>
    <ul>
    <li><span>Tournament Beggins:</span> June 20, 2018</li>
    <li><span>Tounament Ends:</span> July 01, 2018</li>
    <li><span>Participants:</span> 10 teams</li>
    <li><span>Tournament Author:</span> Admin</li>
    </ul>
    <p><span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd place: $500</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    
    <section className="review-section spad set-bg" data-setbg="assets/img/review-bg.png">
    <div className="container">
    <div className="section-title">
    <div className="cata new">new</div>
    <h2>Recent Reviews</h2>
    </div>
    <div className="row">
    <div className="col-lg-3 col-md-6">
    <div className="review-item">
    <div className="review-cover set-bg" data-setbg="assets/img/review/1.jpg">
    <div className="score yellow">9.3</div>
    </div>
    <div className="review-text">
    <h5>Assasin’’s Creed</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6">
    <div className="review-item">
    <div className="review-cover set-bg" data-setbg="assets/img/review/2.jpg">
    <div className="score purple">9.5</div>
    </div>
    <div className="review-text">
    <h5>Doom</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6">
    <div className="review-item">
    <div className="review-cover set-bg" data-setbg="assets/img/review/3.jpg">
    <div className="score green">9.1</div>
    </div>
    <div className="review-text">
    <h5>Overwatch</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6">
    <div className="review-item">
    <div className="review-cover set-bg" data-setbg="assets/img/review/4.jpg">
    <div className="score pink">9.7</div>
    </div>
    <div className="review-text">
    <h5>GTA</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    
    <section className="footer-top-section">
    <div className="container">
    <div className="footer-top-bg">
    <img src="assets/img/footer-top-bg.png" alt="" />
    </div>
    <div className="row">
    <div className="col-lg-4">
    <div className="footer-logo text-white">
    <img src="assets/img/footer-logo.png" alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="footer-widget mb-5 mb-md-0">
    <h4 className="fw-title">Latest Posts</h4>
    <div className="latest-blog">
    <div className="lb-item">
    <div className="lb-thumb set-bg" data-setbg="assets/img/latest-blog/1.jpg"></div>
    <div className="lb-content">
    <div className="lb-date">June 21, 2018</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
    <a href="#" className="lb-author">By Admin</a>
    </div>
    </div>
    <div className="lb-item">
    <div className="lb-thumb set-bg" data-setbg="assets/img/latest-blog/2.jpg"></div>
    <div className="lb-content">
    <div className="lb-date">June 21, 2018</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
    <a href="#" className="lb-author">By Admin</a>
    </div>
    </div>
    <div className="lb-item">
    <div className="lb-thumb set-bg" data-setbg="assets/img/latest-blog/3.jpg"></div>
    <div className="lb-content">
    <div className="lb-date">June 21, 2018</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
    <a href="#" className="lb-author">By Admin</a>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="footer-widget">
    <h4 className="fw-title">Top Comments</h4>
    <div className="top-comment">
    <div className="tc-item">
    <div className="tc-thumb set-bg" data-setbg="assets/img/authors/1.jpg"></div>
    <div className="tc-content">
    <p><a href="#">James Smith</a> <span>on</span> Lorem ipsum dolor sit amet, co</p>
    <div className="tc-date">June 21, 2018</div>
    </div>
    </div>
    <div className="tc-item">
    <div className="tc-thumb set-bg" data-setbg="assets/img/authors/2.jpg"></div>
    <div className="tc-content">
    <p><a href="#">James Smith</a> <span>on</span> Lorem ipsum dolor sit amet, co</p>
    <div className="tc-date">June 21, 2018</div>
    </div>
    </div>
    <div className="tc-item">
    <div className="tc-thumb set-bg" data-setbg="assets/img/authors/3.jpg"></div>
    <div className="tc-content">
    <p><a href="#">James Smith</a> <span>on</span> Lorem ipsum dolor sit amet, co</p>
    <div className="tc-date">June 21, 2018</div>
    </div>
    </div>
    <div className="tc-item">
    <div className="tc-thumb set-bg" data-setbg="assets/img/authors/4.jpg"></div>
    <div className="tc-content">
    <p><a href="#">James Smith</a> <span>on</span> Lorem ipsum dolor sit amet, co</p>
    <div className="tc-date">June 21, 2018</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    
    <footer className="footer-section">
    <div className="container">
    <ul className="footer-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Games</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Forums</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    <p className="copyright">
    Copyright &copy;2021 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="#" target="_blank">Heart</a>
    
    </p>
    </div>
    </footer>
      </div>
      
)
};
}

export default Home;