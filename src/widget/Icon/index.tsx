import * as React from 'react';

export const IconSchema = () => ({
	width: 10,
	height: 10,
	color: 'currentcolor',
});

const KindOfMongooseIconDefault = {
	type: 'icon',
	data: {
		...IconSchema(),
	},
};

export const useIconSchema = dataToOverride =>
	React.useState({
		...IconSchema(),
		...dataToOverride,
	});

export default function Icon({ schema, children }) {
	return (
		<div
			style={{
				width: schema.width,
				height: schema.height,
				backgroundColor: schema.color,
			}}
		>
			{children}
		</div>
	);
}
