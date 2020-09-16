import axios from "axios";

const KEY = "AIzaSyC-UdXEqCBxjBhCF3qLvOd08W5fW_-GQzk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
