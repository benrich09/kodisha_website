export type Page =
  | 'home'
  | 'services'
  | 'how'
  | 'about'
  | 'contact'
  | 'get-app'
  | 'register-renter'
  | 'register-owner'

export type SetPage = (p: Page) => void
