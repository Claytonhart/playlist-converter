import { UPDATE_FINAL_ACCESS_TOKEN } from "../actionTypes";

const finaAccessToken = (state = "", action) => {
	switch (action.type) {
		case UPDATE_FINAL_ACCESS_TOKEN:
			return action.payload;
		default:
			return state;
	}
};

export default finaAccessToken;
