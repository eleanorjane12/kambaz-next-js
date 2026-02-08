import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/courses/1234/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/courses/1200/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/progfordummies.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1200 Programming for Dummies</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                get into that coding!</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/courses/1201/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/proglab.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1201 Lab for Programming for Dummies</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                get into that coding!</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/courses/2400/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/ood.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2400 Object Oriented Programming</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Java Programming</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/courses/2401/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/lab.jpeg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2401 Lab for Object Oriented Programming</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Java Programming Lab!</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
              <Link href="/courses/1212/home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/writing.jpg" width="100%" height={160}/>
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">ENG1212 Intro to Writing</CardTitle>
                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  write those essays!!</CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
              </Card>
          </Col>

           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/courses/3500/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/3500.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3500 Programming 3</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                program even more!!</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

        </Row>

      </div>
    </div>
);}
