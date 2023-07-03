import "./imagebox.css";
import Card from "./Card";

const ImageBox = ({ currentPosts }) => {

  return (
    <div id="card_box">
      {currentPosts?.map((result, index) => (
        <Card key={index} data={result} />
      ))}
    </div>
  );
};

export default ImageBox;
