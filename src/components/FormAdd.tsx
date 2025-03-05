import { FormEvent } from 'react'

const FormAdd = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task..."
        />
      </label>
      <button>
        <span>Submit</span>
        Add
      </button>
    </form>
  )
}

export default FormAdd
