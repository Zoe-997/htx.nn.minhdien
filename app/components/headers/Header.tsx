import Container from "@/app/components/commons/Container";
import Logo from "@/app/components/headers/Logo";
import MainMenu from "@/app/components/headers/MainMenu";
import Tools from "@/app/components/headers/Tools";

const Header = () => {
  return (
    <header className="absolute top-0 right-0 left-0 py-3 z-[2]">
      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <Logo isHeader />
          </div>
          <div className="hidden md:block flex-1">
            <MainMenu />
          </div>
          <div>
            <Tools />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
