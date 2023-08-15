'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthActionType } from '@/types/auth'
import {
  defaultValues,
  FormValues,
  registerForm,
  schemaHandler,
} from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'

import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  formType: AuthActionType
}

export function UserAuthForm({
  formType,
  className,
  ...props
}: UserAuthFormProps) {
  const isLoginForm = formType === AuthActionType.LOGIN
  const router = useRouter()
  const form = useForm<FormValues<typeof isLoginForm>>({
    resolver: zodResolver(schemaHandler(isLoginForm)),
    defaultValues: defaultValues(isLoginForm),
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmitHandler = async (values: FormValues<typeof isLoginForm>) => {
    setIsLoading(true)
    try {
      if (formType === AuthActionType.LOGIN) {
        const response = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
        })
        if (response?.error) {
          throw new Error(response.error)
        }
        router.refresh()
        router.push('/protected')
      } else {
        const response = await fetch('api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        if (!response.ok) {
          const { error } = await response.json()
          throw new Error(
            `Request failed with status ${response.status}: ${error}`
          )
        }
        toast.success('Account created successfully! redirecting to login...')
        router.push('/login')
      }
    } catch (error) {
      console.error(error)
      if (error instanceof Error) toast.error(error.message)
    }
    setIsLoading(false)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitHandler)}>
              {formType === 'register' ? (
                <>
                  {registerForm.map((customField) => (
                    <FormField
                      key={customField.name}
                      control={form.control}
                      name={
                        customField.name as keyof FormValues<typeof isLoginForm>
                      }
                      render={({ field }) => (
                        <FormItem className="mb-2 last:mb-0">
                          <FormControl>
                            <Input
                              autoComplete="off"
                              type={customField.type}
                              disabled={isLoading}
                              {...field}
                              placeholder={customField.placeholder}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </>
              ) : (
                <>
                  {registerForm.slice(2, 4).map((customField) => (
                    <FormField
                      key={customField.name}
                      control={form.control}
                      name={
                        customField.name as keyof FormValues<typeof isLoginForm>
                      }
                      render={({ field }) => (
                        <FormItem className="mb-2 last:mb-0">
                          <FormControl>
                            <Input
                              autoComplete="off"
                              type={customField.type}
                              disabled={isLoading}
                              {...field}
                              placeholder={customField.placeholder}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </>
              )}
              <Button
                type="submit"
                className="flex w-full"
                disabled={isLoading}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                {formType === 'login' ? 'Login' : 'Register'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{' '}
        Github
      </Button>
    </div>
  )
}
