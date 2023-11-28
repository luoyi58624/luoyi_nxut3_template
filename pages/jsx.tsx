import { Bar } from '~/components/button'

export default defineComponent({
	setup() {
		const count = ref(0)
		return () => (
			<div>
				<div>Test</div>
				<button
					onClick={() => {
						count.value++
					}}>
					count: {count.value}
				</button>
				<Bar
					type="second"
					size="large"
					onClick={() => {
						count.value++
					}}>
					count: {count.value}
				</Bar>
			</div>
		)
	}
})
