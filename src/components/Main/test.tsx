import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the reading', () => {
    //renderiza o componente
    const { container } = render(<Main />)
    //busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /hello, world!/i })
    ).toBeInTheDocument()

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
