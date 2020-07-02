import markdown from './readme.md'

export default {
	title: 'Component',
	parameters: {
		notes: { markdown },
	},
}

export const defaultComponent = () => {
	let myComponent = document.createElement('my-component')
	myComponent.first = 'This '
	myComponent.middle = 'is '
	myComponent.last = 'Stencil!!! '

	return myComponent
}
