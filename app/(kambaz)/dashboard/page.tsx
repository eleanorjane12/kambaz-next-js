/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import * as client from "../courses/client";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../courses/reducer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any;

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  const fetchCourses = async () => {
    if (!currentUser) return;
    try {
      const allCourses = currentUser?.role === "STUDENT"
        ? await client.fetchAllCourses()
        : await client.findMyCourses();
      dispatch(setCourses(allCourses));
    } catch (error) {
      console.error(error);
    }
  };


  const fetchEnrolledCourses = async () => {
    if (!currentUser) return;
    try {
      const enrolled = await client.findCoursesForUser(currentUser._id);
      setEnrolledCourses(enrolled);
    } catch (error) {
      console.error(error);
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })));
  };


  const handleEnroll = async (courseId: string) => {
    await client.enrollIntoCourse(currentUser._id, courseId);
    setEnrolledCourses([...enrolledCourses, courses.find(c => c._id === courseId)]);
  };


  const handleUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse(currentUser._id, courseId);
    setEnrolledCourses(enrolledCourses.filter(c => c._id !== courseId));
  };

  useEffect(() => {
    fetchCourses();
    if (currentUser?.role === "STUDENT") fetchEnrolledCourses();
  }, [currentUser]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      
      {currentUser?.role !== "STUDENT" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end me-2"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl as="textarea" value={course.description} rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/courses/${course._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>

                  
                    {currentUser?.role === "STUDENT" ? (
                      enrolledCourses.some(c => c._id === course._id) ? (
                        <button onClick={(e) => { e.preventDefault(); handleUnenroll(course._id); }}
                          className="btn btn-danger float-end">
                          Unenroll
                        </button>
                      ) : (
                        <button onClick={(e) => { e.preventDefault(); handleEnroll(course._id); }}
                          className="btn btn-success float-end">
                          Enroll
                        </button>
                      )
                    ) : (
                      <>
                        <button onClick={(e) => { e.preventDefault(); onDeleteCourse(course._id); }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                        <button onClick={(e) => { e.preventDefault(); setCourse(course); }}
                          className="btn btn-warning float-end me-2"
                          id="wd-edit-course-click">
                          Edit
                        </button>
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}