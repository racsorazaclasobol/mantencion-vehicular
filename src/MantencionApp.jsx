import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const MantencionApp = () => {
  return (
    <>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
    </>
  )
}
