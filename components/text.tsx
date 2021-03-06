import { CSSProperties, PropsWithChildren } from 'react';

export const Header = (props: PropsWithChildren<{ style?: CSSProperties }>) => (
	<h1 style={{ fontSize: '54px', fontWeight: '700', ...props.style }}>
		{props.children}
	</h1>
);

export const SubHeader = (
	props: PropsWithChildren<{ style?: CSSProperties }>
) => (
	<h2
		style={{
			fontSize: '27px',
			fontWeight: '700',
			marginTop: '18px',
			...props.style,
		}}
	>
		{props.children}
	</h2>
);

export const Paragraph = (
	props: PropsWithChildren<{ style?: CSSProperties }>
) => (
	<p
		style={{
			fontSize: '18px',
			color: 'rgba(255, 255, 255, 0.8)',
			lineHeight: '2rem',
			...props.style,
		}}
	>
		{props.children}
	</p>
);

export const Bold = (props: PropsWithChildren<{ style?: CSSProperties }>) => (
	<span style={{ fontWeight: '700', ...props.style }}>{props.children}</span>
);
