const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });
})