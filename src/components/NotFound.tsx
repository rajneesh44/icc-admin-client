import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "10%"}}>
        <h1 style={{fontWeight: "800", textAlign: "center"}}>Page Not Found!</h1>
        <br />
      <img src="https://media.tenor.com/a7ZvW1w9zN0AAAAi/ipl-x-cricket-x.gif" />
      {/* <iframe width="1166" height="656" src="https://www.youtube.com/embed/_86wgCOFi-c" title="What&#39;s it like to face a Murali spin delivery? | Muttiah Muralitharan Bowling Masterclass | Part 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
      <p style={{ textAlign: "center" }}>
        <Link to="/login">Go to Home </Link>
      </p>
    </div>
  );
};

export default NotFound;
