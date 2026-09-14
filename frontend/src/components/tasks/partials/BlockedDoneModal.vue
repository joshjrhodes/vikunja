<template>
	<Modal
		:enabled="enabled"
		@close="$emit('close')"
		@submit="$emit('submit')"
	>
		<template #header>
			<span>{{ $t('task.blockedDone.header') }}</span>
		</template>
		<template #text>
			<p>{{ $t('task.blockedDone.text') }}</p>
			<ul class="blocked-done-list">
				<li
					v-for="blocker in blockers"
					:key="blocker.id"
				>
					{{ blocker.title }}
				</li>
			</ul>
			<p class="has-text-grey">
				{{ $t('task.blockedDone.hint') }}
			</p>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/misc/Modal.vue'
import type {ITask} from '@/modelTypes/ITask'

defineProps<{
	enabled: boolean,
	blockers: ITask[],
}>()

defineEmits<{
	(e: 'close'): void,
	(e: 'submit'): void,
}>()
</script>

<style scoped lang="scss">
.blocked-done-list {
	margin: .5rem 0 .75rem 1.25rem;

	li {
		list-style: disc;
	}
}
</style>
