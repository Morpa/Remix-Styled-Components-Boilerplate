import GlobalStyles from '../app/styles/global'

export const Wrapper = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
