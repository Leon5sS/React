import { MyCalculator } from './MyCalculator.jsx';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<div>
					<MyCalculator />
				</div>
			</header>
		</div>
	);
};
