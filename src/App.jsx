import { IconBrandGithub } from "@tabler/icons";
import Card from "./components/Card";
import Button from "./components/Button";
import PlaceContentCenter from "./components/PlaceContentCenter";
import Input from "./components/Input";

const App = () => {
  return (
    <PlaceContentCenter>
      <Card.Title>Sign up for new account!</Card.Title>
      <Card.Body>
        <div className="mb-6">
          <label htmlFor="name" className="mr-2">
            Name
          </label>
          <Input id={"name"} name={"name"} />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mr-2">
            Email
          </label>
          <Input id={"email"} email={"email"} />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button>
          <IconBrandGithub />
          Register
        </Button>
      </Card.Footer>
    </PlaceContentCenter>
  );
};

export default App;
