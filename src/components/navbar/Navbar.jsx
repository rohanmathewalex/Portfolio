import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar"> 
    {/**Side Bar */}
    <div className="wrapper">
        <span>Rohan Dev</span>
        <div className="social">
            <a href="#"><img src="/linkedin.png" alt=""></img></a>
            <a href="#"><img src="/twitter.png" alt=""></img></a>
            <a href="#"><img src="/reddit.png" alt=""></img></a>
            <a href="#"><img src="/medium.png" alt=""></img></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
