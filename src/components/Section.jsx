import React from 'react';
import Container from './Container';
import './Section.scss';

const Section = ({ children }) => (
	<Container>
		<section className="section">{children}</section>
	</Container>
);

export default Section;
