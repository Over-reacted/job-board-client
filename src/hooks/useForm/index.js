import { useState } from 'react'

export const useForm = (props) => {
  const [formState, setFormState] = useState(props)

  // Update states on Input change
  const handleChange = (e) => {
    e.persist()
    setFormState((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }))
  }
  //
  const onSubmit = () => {
    /* GET the form {parameters}
     * If existing => logIn the user
     * If not matching => throw an error
     * If non existent => register the User
     */
    console.log(formState)
  }

  return { formState, setFormState, handleChange, handleSubmit }
}
