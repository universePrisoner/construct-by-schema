import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import CoreRecursiveRenderer from './core/RecursiveRenderer';

import Button, { useButtonSchema, ButtonSchema } from './widget/Button';
import Icon, { useIconSchema, IconSchema } from './widget/Icon';
import Accordeon, { useAccordeonSchema, AccorderonSchema } from './widget/Accordeon';

const element = {
	button: Button,
	icon: Icon,
	accordeon: Accordeon,
	'custom widget': props => props.children,
};

const schemas = {
	button: useButtonSchema,
	icon: useIconSchema,
	accordeon: useAccordeonSchema,
	'custom widget': () => [{}],
};

// // const serverDefaults = {
// 	// button: KindOfMongooseButtonDefault,
// 	// icon: KindOfMongooseIconDefault,
// //};

const ComplicatedSchema = {
	bucket: [
		{
			type: 'button',
			data: {
				...ButtonSchema(),
			},
			insert: [
				{
					type: 'literal',
					data: 'NoWay',
				},
			],
		},
		{
			type: 'button',
			data: {
				...ButtonSchema(),
			},
			insert: [
				{
					type: 'literal',
					data: 'Hi',
				},
				{
					type: 'icon',
					data: {
						...IconSchema(),
						color: 'blue',
					},
				},
			],
		},
		// 1. preset mode - if we have already existed widgets which contain more difficult data structures
		// 2. edit mode - how to apply data to this such of structure
		// 3. create this data structure with handlers on the front-end by api, imagine this is mongoose.schema
		{
			type: 'accordeon',
			data: {
				...AccorderonSchema(),
			},
			insert: [
				{
					type: 'literal',
					data: 'One more way to go to sleep',
				},
				{
					type: 'icon',
					data: {
						...IconSchema(),
						color: 'red',
					},
				},
				{
					type: 'literal',
					data: 'Elit laboriosam alias debitis dolore laboriosam officiis, cupiditate Veniam quae ratione commodi beatae similique? Veritatis nisi repellat facere similique rerum Eligendi aut laboriosam non illo veniam? Obcaecati sunt soluta vero',
				},
			],
		},
		{
			type: 'custom widget',
			data: {},
			insert: [
				{
					type: 'accordeon',
					data: {
						...AccorderonSchema(),
					},
					insert: [
						{
							type: 'literal',
							data: 'My homie',
						},
						{
							type: 'icon',
							data: {
								...IconSchema(),
								color: 'red',
							},
						},
						{
							type: 'literal',
							data: 'Elit laboriosam alias debitis dolore laboriosam officiis, cupiditate Veniam quae ratione commodi beatae similique? Veritatis nisi repellat facere similique rerum Eligendi aut laboriosam non illo veniam? Obcaecati sunt soluta vero',
						},
					],
				},
				{
					type: 'accordeon',
					data: {
						...AccorderonSchema(),
					},
					insert: [
						{
							type: 'button',
							data: {
								...ButtonSchema(),
							},
							insert: [
								{
									type: 'literal',
									data: 'Long story short. Tap on me',
								},
							],
						},
						{
							type: 'icon',
							data: {
								...IconSchema(),
								color: 'red',
							},
						},
						{
							type: 'literal',
							data: 'Elit laboriosam alias debitis dolore laboriosam officiis, cupiditate Veniam quae ratione commodi beatae similique? Veritatis nisi repellat facere similique rerum Eligendi aut laboriosam non illo veniam? Obcaecati sunt soluta vero',
						},
					],
				},
			],
		},
	],
};

function BuilderResult({ toRender = ComplicatedSchema.bucket }) {
	return (
		<div>
			{ComplicatedSchema.bucket.map((d, idx) => (
				<CoreRecursiveRenderer elementsDTO={element} elementsStyleSchemasDTO={schemas} d={d} key={`${d.type}_${idx}`} />
			))}
		</div>
	);
}

function App() {
	return <BuilderResult />;
}

export default hot(App);
