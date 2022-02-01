import * as React from 'react';

type TAccordeon = {
	children: React.ReactNode[];
};
type TDataToOverride = Record<string, unknown>;

export const AccorderonSchema = () => ({});

export const useAccordeonSchema = (dataToOverride: TDataToOverride) =>
	React.useState({
		...AccorderonSchema(),
		...dataToOverride,
	});

export default function Accordeon({ children }: TAccordeon) {
	const [title, contentAfterTitle, ...contentBody] = children;

	return (
		<div>
			<div>
				<span>{title}</span>
				{contentAfterTitle}
			</div>
			<div>{contentBody}</div>
		</div>
	);
}
