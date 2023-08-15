import * as z from 'zod'

const registerFormSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, {
      message: 'Email is required',
    })
    .max(255),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  dateOfBirth: z.string().min(1, {
    message: 'Date of birth is required',
  }),
})

const loginFormSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, {
      message: 'Email is required',
    })
    .max(255),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
})

const schemaHandler = (condition: boolean) =>
  condition ? loginFormSchema : registerFormSchema

const defaultValues = (condition: boolean) =>
  condition
    ? {
        dateOfBirth: '',
        email: '',
        name: '',
        password: '',
      }
    : {
        email: '',
        password: '',
      }

type LoginFormValues = z.infer<typeof loginFormSchema>

type RegisterFormValues = z.infer<typeof registerFormSchema>

type FormValues<Condition extends boolean> = Condition extends true
  ? LoginFormValues
  : RegisterFormValues

const registerForm = [
  {
    name: 'name',
    placeholder: 'Enter your name',
    type: 'text',
  },
  {
    name: 'dateOfBirth',
    placeholder: 'Enter your date of birth',
    type: 'date',
  },
  {
    name: 'email',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Enter your password',
    type: 'password',
  },
]

export {
  registerFormSchema,
  type RegisterFormValues,
  registerForm,
  loginFormSchema,
  type LoginFormValues,
  type FormValues,
  schemaHandler,
  defaultValues,
}
