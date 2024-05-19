import { FormProvider } from 'react-hook-form'

export const FormHookProvider = ({ methods, method, onSubmit, className = '', children }) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        method={method}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  )
}
