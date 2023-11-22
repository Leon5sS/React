import { useState } from 'react';
import styles from './MyCalculator.module.css';
import { refOutput } from './index';

const numericKeys = [
	{ id: '1', val: '1' },
	{ id: '2', val: '2' },
	{ id: '3', val: '3' },
	{ id: '4', val: '4' },
	{ id: '5', val: '5' },
	{ id: '6', val: '6' },
	{ id: '7', val: '7' },
	{ id: '8', val: '8' },
	{ id: '9', val: '9' },
	{ id: '0', val: '0' },
	{ id: '-', val: '-' },
	{ id: '+', val: '+' },
	{ id: '/', val: '/' },
	{ id: '*', val: '*' },
];
const operationKeys = [
	{ id: 'CE', val: 'CE' },
	{ id: 'C', val: 'C' },
	{ id: '=', val: '=' },
];

export const MyCalculator = () => {
	const [state, setState] = useState({ out: '0' });

	const tapeNumber = (value) => {
		let currentValue = value;
		let output = refOutput.current;

		setState({
			out: currentValue,
		});

		if (output.value === '0') output.value = '';
		output.value += currentValue;
	};

	const tapeOperetion = (value) => {
		let output = refOutput.current;

		if (value === 'CE') {
			output.value.length === 1 ? (output.value = '0') : (output.value = output.value.substring(0, output.value.length - 1));
		} else if (value === 'C') {
			output.value = '0';
		} else if (value === '=') {
			try {
				output.value = eval(output.value);
			} catch {
				output.value = 'ERROR';
				setTimeout(() => {
					output.value = '0';
				}, 1500);
			}
		}
	};

	return (
		<>
			<div className={styles.colculator}>
				<div className={styles.output}>
					<input id="elem" ref={refOutput} type="text" defaultValue={state.out} className={styles.display} />
				</div>
				<div className={styles.buttons}>
					{numericKeys.map((item, id) => (
						<button
							key={id}
							onClick={() => {
								tapeNumber(item.val);
							}}
						>
							{item.val}
						</button>
					))}
					{operationKeys.map((item, id) => (
						<button
							key={id}
							onClick={() => {
								tapeOperetion(item.val);
							}}
						>
							{item.val}
						</button>
					))}
				</div>
			</div>
		</>
	);
};
