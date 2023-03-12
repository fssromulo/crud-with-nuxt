import axios from "axios";
const baseURL = "https://sys-dev.searchandstay.com/api/admin/";

export default function getAxios() {
	return axios.create({
		baseURL,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
		},
	});
}

export async function getToken() {
	const responseToken = await axios.post(baseURL + "login_json", {
		login: {
			email: "task@searchandstay.com",
			password: "ph37i45K",
		},
	});

	if (responseToken.status >= 200 && responseToken.status < 300) {
		localStorage.setItem("accessToken", responseToken.data.data.result.access_token);
		return responseToken;
	}
}
