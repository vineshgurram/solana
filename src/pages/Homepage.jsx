import { Container } from "react-bootstrap";
import Banner from "../components/Banner";

export default function Homepage() {
  return (
    <>
      <Banner>
        <Container className="h-100">
          <div className="text-center max-777 mx-auto h-100">
            <div className="d-flex align-center justify-content-center flex-column h-100">
            <div className="mb-50">
              <h2 className="bs-heading">Powerful for developers.</h2>
              <h2 className="bs-heading">Fast for everyone</h2>
            </div>
            <p className="bs-para typ-21 typ-white">
              Bring blockchain to the people. Solana supports experiences for
              power users, new consumers, and everyone in between.
            </p>
            </div>
          </div>
        </Container>
      </Banner>
    </>
  );
}
