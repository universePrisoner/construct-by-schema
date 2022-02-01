import * as React from 'react';

/**
 *
 */
type TProps = {
	elementsDTO: {
		[key: string]: (props: unknown) => JSX.Element;
	};
};

export default function RecursiveRenderer({ d, elementsDTO, elementsStyleSchemasDTO }: TProps) {
	const Component = elementsDTO[d.type];
	const [schema] = elementsStyleSchemasDTO[d.type](d.data);

	return (
		<Component schema={schema}>
			{d.insert &&
				!!d.insert.length &&
				d.insert.map((insertedD, idx) => {
					if (insertedD.type === 'literal') {
						return insertedD.data;
					}

					return (
						<RecursiveRenderer
							elementsDTO={elementsDTO}
							elementsStyleSchemasDTO={elementsStyleSchemasDTO}
							d={insertedD}
							key={`${insertedD.type}_${idx}`}
						/>
					);
				})}
		</Component>
	);
}
