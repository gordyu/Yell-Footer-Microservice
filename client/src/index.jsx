import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

const yelpBurst = <FontAwesomeIcon icon={faYelp} />;

const NavL = styled(Nav.Link)`
  color: #0073bb;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  &:hover {
    text-decoration: underline;
    color: #0073bb;
  }
`;

const DD = styled(NavDropdown)`
  &&& {background-color: #e6e6e6};
  &&& {color: #0073bb};
  &&& {font-size: 14px};
  &&& {line-height: 18px};
  &&& {text-align: left};
`;

const DDI = styled(NavDropdown.Item)`
  &&& {color: #0073bb !important}; //why doesn't this work?
  &&& {margin: 1em};
  &&& {font-size: 14px !important}; //why doesn't this inherit?
  line-height: 18px;
  &&&:hover {
    outline-color: #0073bb;
    color: #0073bb;
  }
`;

const SML = styled(Nav.Link)`
  color: #0073bb;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
    color: #0073bb;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  render() {
    return (
      <div id="footer">
        <div id="footer-menu">
          <Container>
            <Nav className="justify-content-md-center">
              <Row>
                <Col>
                  <span className="NavMenuTitle">About</span>
                  <Nav.Item>
                    <NavL>About Yelp</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Careers</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Press</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Investor Relations</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Content Guidelines</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Terms of Service</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Privacy Policy</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Ad Choices</NavL>
                  </Nav.Item>
                </Col>
                <Col>
                  <span className="NavMenuTitle">Discover</span>
                  <Nav.Item>
                    <NavL>Yelp Project Cost Guides</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Collections</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Talk</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Events</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>The Local Yelp</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Yelp Blog</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Support</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Yelp Mobile</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Developers</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>RSS</NavL>
                  </Nav.Item>
                </Col>
                <Col>
                  <span className="NavMenuTitle">Yelp for Business Owners</span>
                  <Nav.Item>
                    <NavL>Claim your Business Page</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Advertise on Yelp</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Yelp Reservations</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Yelp WiFi</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Yelp Nowait</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Business Success Stories</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Business Support</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Yelp Blog for Business Owners</NavL>
                  </Nav.Item>
                  <Nav.Item>
                    <NavL>Owners</NavL>
                  </Nav.Item>
                </Col>
                <Col>
                  <span className="NavMenuTitle">Languages</span>
                  <DD style={{color: "#0073bb", textAlign: "left"}} className="dropdown" title="English">
                    <DDI>Deutsch</DDI>
                    <br />
                    <DDI>English</DDI>
                    <br />
                    <DDI>Español</DDI>
                    <br />
                    <DDI>Français</DDI>
                    <br />
                    <DDI>Português</DDI>
                    <br />
                    <DDI>Türkçe</DDI>
                    <NavDropdown.Divider />
                    <DDI>日本語</DDI>
                    <br />
                    <DDI>中文</DDI>
                  </DD>
                  <br />
                  <span className="NavMenuTitle">Countries</span>
                  <DD style={{color: "#0073bb", textAlign: "left"}} className="dropdown" title="United States">
                    <DDI>Argentina</DDI>
                    <br />
                    <DDI>Australia</DDI>
                    <br />
                    <DDI>Austria</DDI>
                    <br />
                    <DDI>Belgium</DDI>
                    <br />
                    <DDI>Brazil</DDI>
                    <br />
                    <DDI>Canada</DDI>
                    <br />
                    <DDI>Chile</DDI>
                    <br />
                    <DDI>Czech Republic</DDI>
                    <br />
                    <DDI>Denmark</DDI>
                    <br />
                    <DDI>Finland</DDI>
                    <br />
                    <DDI>France</DDI>
                    <br />
                    <DDI>Germany</DDI>
                    <br />
                    <DDI>Hong Kong</DDI>
                    <br />
                    <DDI>Italy</DDI>
                    <br />
                    <DDI>Japan</DDI>
                    <br />
                    <DDI>Malaysia</DDI>
                    <br />
                    <DDI>Mexico</DDI>
                    <br />
                    <DDI>New Zealand</DDI>
                    <br />
                    <DDI>Norway</DDI>
                    <br />
                    <DDI>Philippines</DDI>
                    <br />
                    <DDI>Poland</DDI>
                    <br />
                    <DDI>Portugal</DDI>
                    <br />
                    <DDI>Republic of Ireland</DDI>
                    <br />
                    <DDI>Singapore</DDI>
                    <br />
                    <DDI>Spain</DDI>
                    <br />
                    <DDI>Sweden</DDI>
                    <br />
                    <DDI>Switzerland</DDI>
                    <br />
                    <DDI>Taiwan</DDI>
                    <br />
                    <DDI>The Netherlands</DDI>
                    <br />
                    <DDI>Turkey</DDI>
                    <br />
                    <DDI>United Kingdom</DDI>
                    <br />
                    <DDI>United States</DDI>
                  </DD>
                </Col>
              </Row>
            </Nav>
          </Container>
          <br />
          <br />
        </div>
        <div id="cities">
          <Container><hr/>
            <Nav className="justify-content-md-center">
              Site Map&nbsp;&nbsp;
              <Nav.Item>
                <SML>Atlanta</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Austin</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Boston</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Chicago</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Dallas</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Denver</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Detroit</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Honolulu</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Houston</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Los Angeles</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Miami</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Minneapolis</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>New York</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Philadelphia</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Portland</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Sacramento</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>San Diego</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>San Francisco</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>San Jose</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Seattle</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>Washington, DC</SML>
              </Nav.Item>
              &nbsp;|&nbsp;
              <Nav.Item>
                <SML>More Cities</SML>
              </Nav.Item>
            </Nav>
          </Container>
        </div>
        <div id="cityscape">
          <Col style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
            <Image src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/573fa19c8435/assets/img/structural/footer_cityscape.png" fluid />
          </Col>
        </div>
        <div id="copyright">
          Copyright © 2004–2019 Yell Inc., <b>yell</b>
          <span className="logo">{yelpBurst}</span>,{" "}
          <span className="logo">{yelpBurst}</span> and related marks are
          registered trademarks of Yell.
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("footer"));