function Info() {
  return (
    <div className="container">
      <div className="box">
        <div className="profile">
          <div className="img-box">
            <img className="img" src="../../images/allelle.jpg" />
          </div>
          <div className="profile--details">
            <h2>Sunday Gideon</h2>
            <h5>Frontend Developer</h5>
            <h6>gideonsunday.dev@gmail.com</h6>
          </div>
        </div>
        <div className="info">
          <div className="btns">
            <button className="email-btn">Email</button>
            <button className="link-btn">LinKedIn</button>
          </div>
          <div className="content">
            <h3>About</h3>
            <div>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and i am always looking for new
              things to learn.
            </div>
          </div>
          <div className="content">
            <h3>Interest</h3>
            <div>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default Info;
