import axios from "axios";

export default axios.create({
	baseURL: "https://fledge-jobs-server.vercel.app/api/v1",
});
