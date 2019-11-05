import { h, Component } from 'preact';

export default class Example extends Component {
	state = {
		cats: 'cute'
	}

	render(props, { cats }) {
		return (
			<div>
				<span>cats are:</span>
				<span>{ cats }</span>
			</div>
		);
	}
}
