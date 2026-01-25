import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


        <div className="wd-dashboard-course">
          <Link href="/courses/1200" className="wd-dashboard-course-link">
          <Image src="/images/progfordummies.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1200 Programming For Dummies </h5>
              <p className="wd-dashboard-course-title">
                Doing coding
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/1201" className="wd-dashboard-course-link">
          <Image src="/images/proglab.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1201 Lab for Programming for Dummies </h5>
              <p className="wd-dashboard-course-title">
                get into that coding!
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/2400" className="wd-dashboard-course-link">
            <Image src="/images/ood.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS2400 Object Oriented Programming </h5>
              <p className="wd-dashboard-course-title">
                Java Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/2401" className="wd-dashboard-course-link">
            <Image src="/images/lab.jpeg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS2401 Lab for Object Oriented Programming </h5>
              <p className="wd-dashboard-course-title">
                Java Programming Lab!
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/1212" className="wd-dashboard-course-link">
            <Image src="/images/writing.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> ENG1212 Intro to Writing </h5>
              <p className="wd-dashboard-course-title">
                write those essays!!
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/3500" className="wd-dashboard-course-link">
            <Image src="/images/3500.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS3500 Programming 3 </h5>
              <p className="wd-dashboard-course-title">
                program even more!!
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        

      </div>
    </div>
);}
