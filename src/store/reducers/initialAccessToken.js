import { UPDATE_INITIAL_ACCESS_TOKEN } from "../actionTypes";

const initialAccessToken = (state = "", action) => {
	switch (action.type) {
		case UPDATE_INITIAL_ACCESS_TOKEN:
			return action.payload;
		default:
			return state;
	}
};

export default initialAccessToken;
