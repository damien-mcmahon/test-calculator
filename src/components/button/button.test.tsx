import { Button} from "."
import { render, screen, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

const onClickSpy = jest.fn();

describe('Button', () => {
  it('displays the text passed', () => {
    render(<Button onClick={onClickSpy} text="=" type="number" />)

    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  it('calls the handler when clicked', () => {
    render(<Button onClick={onClickSpy} text="Add" type="operator"/>)

    fireEvent.click(screen.getByText('Add'));

    expect(onClickSpy).toHaveBeenCalled();
  })
})