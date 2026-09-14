import type {ITask} from '@/modelTypes/ITask'

/**
 * Tasks that block the given task and are not done yet.
 * Used to warn before completing a task whose blockers are still open.
 */
export function getOpenBlockers(task: ITask): ITask[] {
	return (task.relatedTasks?.blocked ?? []).filter(t => !t.done)
}
