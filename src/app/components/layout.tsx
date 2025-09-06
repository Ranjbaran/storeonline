
import Container from "./container";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Navbar />
        <Container>{children}</Container>
    </>
  );
}
