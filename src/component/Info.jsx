export default function Info() {
  return (
    <div className="info">
      <div className="btns">
        <button className="email-btn">
          <i className="bx bxs-envelope"></i>Email
        </button>
        <button className="link-btn">
          <i className="bx bxl-linkedin-square"></i>LinKedIn
        </button>
      </div>
      <div className="content">
        <h3>About</h3>
        <div>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and i am always looking for new things to learn.
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
  );
}
