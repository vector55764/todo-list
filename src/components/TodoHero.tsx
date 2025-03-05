import { FC } from 'react'

interface ITodoHero {
  todosCompleted: number
  todosAll: number
}

const TodoHero: FC<ITodoHero> = ({ todosCompleted, todosAll }) => {
  return (
    <section>
      <div>
        <p>Task Done</p>
        <p>KeepItUp</p>
      </div>
      <div>
        {todosCompleted}/{todosAll}
      </div>
    </section>
  )
}

export default TodoHero
