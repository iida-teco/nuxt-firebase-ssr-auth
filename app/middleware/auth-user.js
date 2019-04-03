export default async function({ store, redirect }) {
  const isAuthenticated = await store.getters['users/isAuthenticated']
  if (!isAuthenticated) {
    redirect('/')
  }
}
