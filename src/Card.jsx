import profilePic from "./assets/fdad665f-ff0c-4bf2-b6fb-491879007db2.jpg";

function Card() {
  return (
    <div className="card">
      <img className="picture" src={profilePic} alt="profile picture" />
      <h2 className="title">Alperen Aktuğ</h2>
      <p className="text">I make Youtube videos and play video games</p>
    </div>
  );
}

export default Card;
