import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import checkLogin from "../utils/check_login";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const LearningVideos = () => {
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  const fetchTutorials = async () => {
    if (await checkLogin()) {
      const response = await axios.get(`${BASE_URL}/videos?type=tutorials`);
      if (response.status === 200) {
        setVideos(response.data.data);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchTutorials();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container" id="products-container">
        <div className="product-heading-parent">
          <div className="prodcuts-heading">
            <h2>Tutorials</h2>
          </div>
        </div>
        <div className="hl"></div>
        {videos.map((video: any) => {
          return (
            <iframe
              key={video.title}
              width="400"
              height="250"
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          );
        })}
      </div>
    </div>
  );
};

export default LearningVideos;
