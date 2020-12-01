import logo from './logo.svg';
import './App.css';
import { PrimaryButton, SecondaryButton } from './components/Button';

function App() {
	return (
		<div className='App'>
			<PrimaryButton modifiers={['small']}>Test</PrimaryButton>
			<SecondaryButton modifiers={['large', 'warning']}>Test</SecondaryButton>
		</div>
	);
}

export default App;
