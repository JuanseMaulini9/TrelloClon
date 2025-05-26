interface AuthLayoutProps {
  title: string,
  description: string,
  children: React.ReactNode
}

const AuthLayout = ({title, description, children}: AuthLayoutProps) => {
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="flex flex-col items-center gap-2 w-md h-3/4 bg-neutral-900 rounded-2xl text-white p-5">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-lg text-gray-500">{description}</p>
        {children}
      </section>
    </main>
  )
}

export default AuthLayout