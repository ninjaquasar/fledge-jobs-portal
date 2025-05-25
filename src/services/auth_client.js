import axios from "axios";

export default axios.create({
	baseURL: "https://fledgejobs.vercel.app/auth",
});
