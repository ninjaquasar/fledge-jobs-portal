import axios from "axios";

export default axios.create({
	baseURL: "http://127.0.0.1:8000/api/v1",
	// baseURL: "https://fledge-jobs-server.vercel.app/api/v1",
});
