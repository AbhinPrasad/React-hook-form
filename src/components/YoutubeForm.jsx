import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const YoutubeForm = () => {
	const form = useForm();

	const { register, control, handleSubmit } = form;

	const onSubmit = (data) => {
		console.log("submitted", data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					id="username"
					placeholder="username"
					{...register("username")}
				/>
				<input
					type="email"
					id="email"
					placeholder="email"
					{...register("email")}
				/>
				<input
					type="text"
					id="channel"
					placeholder="channel"
					{...register("channel")}
				/>
				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default YoutubeForm;
