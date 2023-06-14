import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will work on</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        placeholder="Name your project"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Project 1"></option>
        <option value="Project 2"></option>
        <option value="Project 3"></option>
        <option value="Project 4"></option>
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
