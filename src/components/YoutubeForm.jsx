import React from "react";

const YoutubeForm = () => {
	return (
		<div>
			<form>
				<input type="text" name="username" placeholder="username" />
				<input type="email" name="email" placeholder="email" />
				<input type="text" name="channel" placeholder="channel" />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default YoutubeForm;
