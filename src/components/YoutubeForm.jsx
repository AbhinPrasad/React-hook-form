import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const YoutubeForm = () => {
	const form = useForm({
		defaultValues: {
			username: "Batman",
			email: "",
			channel: "",
			social: {
				twitter: "",
				facebook: ""
			},
			phone:["",""]
		}
	});

	const { register, control, handleSubmit, formState } = form;

	const { errors } = formState;

	const onSubmit = (data) => {
		console.log("submitted", data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="form-control">
					<input
						type="text"
						id="username"
						placeholder="username"
						{...register("username", {
							required: {
								value: true,
								message: "username is required"
							}
						})}
					/>
					<p className="error">{errors.username?.message}</p>
				</div>

				<div className="form-control">
					<input
						type="email"
						id="email"
						placeholder="email"
						{...register("email", {
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Invalid email format"
							},
							required: {
								value: true,
								message: "email is required"
							},
							validate: {
								notAdmin: (fieldValue) => {
									return (
										fieldValue !== "admin@gmail.com" ||
										"Enter a different email"
									);
								},
								notBlackListed: (fieldValue) => {
									return (
										!fieldValue.endsWith("baddomain.com") ||
										"this domain is not supported"
									);
								}
							}
						})}
					/>
					<p className="error">{errors.email?.message}</p>
				</div>
				<div className="form-control">
					<input
						type="text"
						id="channel"
						placeholder="channel"
						{...register("channel", {
							required: {
								value: true,
								message: "channel name is required"
							}
						})}
					/>
					<p className="error">{errors.channel?.message}</p>
				</div>
				<div className="form-control">
					<input
						type="text"
						id="twitter"
						placeholder="twitter"
						{...register("social.twitter")}
					/>
				</div>
				<div className="form-control">
					<input
						type="text"
						id="facebook"
						placeholder="facebook"
						{...register("social.facebook")}
					/>
				</div>
				<div className="form-control">
					<input
						type="text"
						id="primary-phone"
						placeholder="primary ph"
						{...register("phone.0")}
					/>
				</div>
				<div className="form-control">
					<input
						type="text"
						id="secondory-phone"
						placeholder="secondory-ph"
						{...register("phone.1")}
					/>
				</div>
				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default YoutubeForm;
