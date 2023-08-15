export const useRelativePath = (pathName: string) => {
  if (pathName === '/register') {
    return { href: '/login', text: 'Login', formLabel: 'Create an account' }
  }

  return {
    href: '/register',
    text: 'Register',
    formLabel: 'Login to your account',
  }
}
