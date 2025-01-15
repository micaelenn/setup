// external modules
import { FC } from 'react'
import { FinnTheHuman } from "@phosphor-icons/react"

// internal modules
import { Component } from './Balloon.styles'

interface BalloonProps {
	className?: string;
}

const Balloon: FC<BalloonProps> = ({ className }) => {
	return (
		<Component className={`${className}`}>
			<FinnTheHuman size={32} />
		</Component>
	);
};

export default Balloon