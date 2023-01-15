import { IconBrandGithub } from "@tabler/icons";

import Card from "./components/Card";
import Button from "./components/Button";
import Tms from "./assets/img/tms.png";

const App = () => {
  const type = "submit";
  const onClick = () => console.log("Login with another style...");
  return (
    <div
      className={
        "bg-slate-50 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen"
      }>
      <div className={"max-w-md w-full"}>
        <Card>
          <Card.Title>Hello Coding</Card.Title>
          <Card.Body>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default App;
