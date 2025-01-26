import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Banner from "../components/Banner";
import ClientsSection from "../components/ClientsSection";
import DesktopBanner from "/images/home/bg-home-banner.png";
import Section from "../components/Section";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import bgGradient from "/images/home/bg-gradient.png";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Banner
        className="typ-home"
        DesktopBanner={DesktopBanner}
        MobileBanner={DesktopBanner}
      >
        <Container className="h-100">
          <div className="text-center max-777 mx-auto h-100">
            <div className="d-flex align-center justify-content-center flex-column h-100">
              <div className="mb-50">
                <h2 className="bs-heading" data-aos="fade-up">Powerful for developers.</h2>
                <h2 className="bs-heading" data-aos="fade-up">Fast for everyone</h2>
              </div>
              <p className="bs-para typ-21 typ-white mb-50" data-aos="fade-up">
                Bring blockchain to the people. Solana supports experiences for
                power users, new consumers, and everyone in between.
              </p>
              <div className="btn-wrapper" data-aos="fade-up">
                <button className="btn bs-btn typ-purple-gradient">
                  Start building
                </button>
                <button className="btn bs-btn typ-outline-white">
                  Read docs
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Banner>
      <ClientsSection />
      <Section className={"typ-community"}>
        <Container>
          <Row>
            <Col>
              <h2 className="bs-heading typ-40" data-aos="fade-up">Join a community</h2>
              <h2 className="bs-heading typ-40" data-aos="fade-up">of millions.</h2>
            </Col>
            <Col>
              <div className="mb-50" data-aos="fade-up">
                <h3 className="bs-heading typ-101 typ-purple-gradient2">
                  <CountUp
                    start={0}
                    end={11.5}
                    decimals={1}
                    useEasing={true}
                    duration={2}
                  />
                </h3>
                <p className="bs-para typ-grey1 text-uppercase">
                  Active accounts
                </p>
              </div>
              <div className="mb-50" data-aos="fade-up">
                <h3 className="bs-heading typ-101 typ-green-gradient">
                  {" "}
                  <CountUp
                    start={0}
                    end={21.9}
                    decimals={1}
                    suffix={"M"}
                    useEasing={true}
                    duration={2}
                  />
                </h3>
                <p className="bs-para typ-grey1 text-uppercase">NFTs minted</p>
              </div>
              <div className="mb-50" data-aos="fade-up">
                <h3 className="bs-heading typ-101 typ-green-gradient2">
                  <CountUp
                    start={0}
                    end={0.00025}
                    decimals={5}
                    prefix={"$"}
                    useEasing={true}
                    duration={2}
                  />
                </h3>
                <p className="bs-para typ-grey1 text-uppercase">
                  Average cost per transaction
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className={"typ-adoption"}>
        <Container>
          <Row>
            <Col lg={"4"}>
              <h2 className="bs-heading typ-40" data-aos="fade-up">Made for</h2>
              <h2 className="bs-heading typ-40" data-aos="fade-up">mass adoption.</h2>
              <p className="bs-para typ-grey1 text-uppercase" data-aos="fade-up">
                <span className="dot"></span>
                Live data
              </p>
            </Col>
            <Col lg={"8"}>
              <Row className="g-4">
                <Col lg={"6"}>
                  <div className="bs-card typ-adoption" data-aos="fade-up">
                    <Card>
                      <Card.Body className="mb-20">
                        <Card.Title className="bs-heading typ-28 typ-white typ-line typ-lblue mb-2">
                          Fast
                        </Card.Title>
                        <Card.Text className="bs-para typ-grey1">
                          Don’t keep your users waiting. Solana has block times
                          of 400 milliseconds — and as hardware gets faster, so
                          will the network.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <h3 className="bs-heading typ-28 typ-white">
                          <span className="dot"></span>
                          <CountUp
                            start={0}
                            end={3969}
                            decimals={0}
                            prefix={""}
                            useEasing={true}
                            duration={2}
                          />
                        </h3>
                        <p className="text-uppercase bs-para typ-grey1">
                          Transactions per second
                        </p>
                      </Card.Footer>
                    </Card>
                  </div>
                </Col>
                <Col lg={"6"}>
                  <div className="bs-card typ-adoption" data-aos="fade-up">
                    <Card>
                      <Card.Body className="mb-20">
                        <Card.Title className="bs-heading typ-28 typ-white typ-line typ-lblue mb-2">
                          Fast
                        </Card.Title>
                        <Card.Text className="bs-para typ-grey1">
                          Don’t keep your users waiting. Solana has block times
                          of 400 milliseconds — and as hardware gets faster, so
                          will the network.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <h3 className="bs-heading typ-28 typ-white">
                          <span className="dot"></span>
                          <CountUp
                            start={0}
                            end={3969}
                            decimals={0}
                            prefix={""}
                            useEasing={true}
                            duration={2}
                          />
                        </h3>
                        <p className="text-uppercase bs-para typ-grey1">
                          Transactions per second
                        </p>
                      </Card.Footer>
                    </Card>
                  </div>
                </Col>
                <Col lg={"6"}>
                  <div className="bs-card typ-adoption" data-aos="fade-up">
                    <Card>
                      <Card.Body className="mb-20">
                        <Card.Title className="bs-heading typ-28 typ-white typ-line typ-lblue mb-2">
                          Fast
                        </Card.Title>
                        <Card.Text className="bs-para typ-grey1">
                          Don’t keep your users waiting. Solana has block times
                          of 400 milliseconds — and as hardware gets faster, so
                          will the network.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <h3 className="bs-heading typ-28 typ-white">
                          <span className="dot"></span>
                          <CountUp
                            start={0}
                            end={3969}
                            decimals={0}
                            prefix={""}
                            useEasing={true}
                            duration={2}
                          />
                        </h3>
                        <p className="text-uppercase bs-para typ-grey1">
                          Transactions per second
                        </p>
                      </Card.Footer>
                    </Card>
                  </div>
                </Col>
                <Col lg={"6"}>
                  <div className="bs-card typ-adoption" data-aos="fade-up">
                    <Card>
                      <Card.Body className="mb-20">
                        <Card.Title className="bs-heading typ-28 typ-white typ-line typ-lblue mb-2">
                          Fast
                        </Card.Title>
                        <Card.Text className="bs-para typ-grey1">
                          Don’t keep your users waiting. Solana has block times
                          of 400 milliseconds — and as hardware gets faster, so
                          will the network.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <h3 className="bs-heading typ-28 typ-white">
                          <span className="dot"></span>
                          <CountUp
                            start={0}
                            end={3969}
                            decimals={0}
                            prefix={""}
                            useEasing={true}
                            duration={2}
                          />
                        </h3>
                        <p className="text-uppercase bs-para typ-grey1">
                          Transactions per second
                        </p>
                      </Card.Footer>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}
