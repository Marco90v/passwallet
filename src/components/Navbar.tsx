import Li from "@components/Li";
import GenerateKey from "@components/GenerateKey";

const Navbar = () => {
  return (
    <nav className="bg-zinc-950">
      <ul className="flex justify-end items-center gap-4">
        <Li>Home</Li>
        <Li>New</Li>
        <Li>About</Li>
        <Li className="mr-4">
          <GenerateKey />
        </Li>
      </ul>
    </nav>
  );
};

export default Navbar;