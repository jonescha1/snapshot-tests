import renderer from "react-test-renderer";
import Card from "./index";

test("renders a snapshot of the card", () => {
  const tree = renderer.create(<Card />).toJSON();

  expect(tree).toMatchSnapshot();
});
