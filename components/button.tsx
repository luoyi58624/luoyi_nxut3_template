export const Bar = defineComponent({
	setup(props: Props, { slots }) {
		return () => <button onClick={props.onClick}>{slots.default ? slots.default() : ''}</button>
	}
})

interface Props {
	children: any
	type?: 'primary' | 'second'
	size?: 'small' | 'media' | 'large'
	onClick?: any
}
