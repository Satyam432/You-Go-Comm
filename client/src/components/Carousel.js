import React from 'react';
import './Carousel.css';
import { Modal, ModalHeader } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import Button from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Slide extends React.Component {
	constructor(props) {
		super(props);

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleSlideClick = this.handleSlideClick.bind(this);
		this.imageLoaded = this.imageLoaded.bind(this);
		this.toggle = this.toggle.bind(this);
		this.slide = React.createRef();
		this.state = { modal: false };
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	handleMouseMove(event) {
		const el = this.slide.current;
		const r = el.getBoundingClientRect();

		el.style.setProperty(
			'--x',
			event.clientX - (r.left + Math.floor(r.width / 2))
		);
		el.style.setProperty(
			'--y',
			event.clientY - (r.top + Math.floor(r.height / 2))
		);
	}

	handleMouseLeave(event) {
		this.slide.current.style.setProperty('--x', 0);
		this.slide.current.style.setProperty('--y', 0);
	}

	handleSlideClick(event) {
		this.props.handleSlideClick(this.props.slide.index);
	}

	imageLoaded(event) {
		event.target.style.opacity = 1;
	}

	render() {
		const { src, button, headline, index } = this.props.slide;
		const current = this.props.current;
		let classNames = 'slide';

		if (current === index) classNames += ' slide--current';
		else if (current - 1 === index) classNames += ' slide--previous';
		else if (current + 1 === index) classNames += ' slide--next';

		return (
			<li
				ref={this.slide}
				className={classNames}
				onClick={this.handleSlideClick}
				onMouseMove={this.handleMouseMove}
				onMouseLeave={this.handleMouseLeave}>
				<div className='slide__image-wrapper'>
					<img
						className='slide__image'
						alt={headline}
						src={src}
						onLoad={this.imageLoaded}
					/>
				</div>

				<article className='slide__content'>
					<h2 className='slide__headline'>{headline}</h2>
					{button && (
						<React.Fragment>
							<button
								className='slide__action btn'
								onClick={this.toggle}>
								{button}
							</button>
							<Modal
								size='lg'
								isOpen={this.state.modal}
								toggle={this.toggle}>
								<ModalHeader
									toggle={this.toggle}
									cssModule={{
										'modal-title': 'w-100 text-center h2'
									}}>
									Stock Cooker
								</ModalHeader>
								<ModalBody
									cssModule={{ 'modal-body': 'm-body' }}>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</ModalBody>
								<ModalFooter>
									<button className='cards-button'>
										<Link to='/'>Show Details</Link>
									</button>
								</ModalFooter>
							</Modal>
						</React.Fragment>
					)}
				</article>
			</li>
		);
	}
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
	return (
		<button
			className={`btn btn--${type}`}
			title={title}
			onClick={handleClick}>
			<svg className='icon' viewBox='0 0 24 24'>
				<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
			</svg>
		</button>
	);
};

// =========================
// Slider
// =========================

class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			current: 1,
			slides: [
				{
					index: 0,
					headline: '',
					button: '',
					src:
						'https://image.freepik.com/free-vector/white-room-with-light-coming-soon-text_1017-5070.jpg'
				},
				{
					index: 1,
					headline: 'Stock Cooker',
					button: 'Show Details',
					src:
						'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
				},
				{
					index: 2,
					headline: '',
					button: '',
					src:
						'https://image.freepik.com/free-vector/white-room-with-light-coming-soon-text_1017-5070.jpg'
				}
				// {
				// 	index: 3,
				// 	headline: 'For Your Current Mood',
				// 	button: 'Listen',
				// 	src:
				// 		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
				// },
				// {
				// 	index: 4,
				// 	headline: 'Focus On The Writing',
				// 	button: 'Get Focused',
				// 	src:
				// 		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
				// }
			]
		};
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handleSlideClick = this.handleSlideClick.bind(this);
	}

	handlePreviousClick() {
		const previous = this.state.current - 1;

		this.setState({
			current: previous < 0 ? this.state.slides.length - 1 : previous
		});
	}

	handleNextClick() {
		const next = this.state.current + 1;

		this.setState({
			current: next === this.state.slides.length ? 0 : next
		});
	}

	handleSlideClick(index) {
		if (this.state.current !== index) {
			this.setState({
				current: index
			});
		}
	}

	render() {
		const { current, slides } = this.state;
		const { heading } = this.props;
		const headingId = `slider-heading__${heading
			.replace(/\s+/g, '-')
			.toLowerCase()}`;
		const wrapperTransform = {
			transform: `translateX(-${current * (100 / slides.length)}%)`
		};

		return (
			<div className='slider' aria-labelledby={headingId}>
				<ul className='slider__wrapper' style={wrapperTransform}>
					<h3 id={headingId} class='visuallyhidden'>
						{heading}
					</h3>

					{slides.map((slide) => {
						return (
							<Slide
								key={slide.index}
								slide={slide}
								current={current}
								handleSlideClick={this.handleSlideClick}
							/>
						);
					})}
				</ul>

				<div className='slider__controls'>
					<SliderControl
						type='previous'
						title='Go to previous slide'
						handleClick={this.handlePreviousClick}
					/>

					<SliderControl
						type='next'
						title='Go to next slide'
						handleClick={this.handleNextClick}
					/>
				</div>
			</div>
		);
	}
}

export default Carousel;
