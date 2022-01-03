import React from 'react'

interface ButtonProps {
	primary?: boolean
	size?: 'small' | 'medium' | 'large'
	label: string
	onClick?: () => void
}

export const Button = ({ primary = false, size = 'medium', label, ...props }: ButtonProps) => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
	return (
		<button type='button' className={`bg-red-700 p-5`} {...props}>
			{label}
		</button>
	)
}
