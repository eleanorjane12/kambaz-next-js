import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
        placeholder="username" defaultValue="alice"
        className="mb-2"/>
      <FormControl id="wd-password"
        placeholder="password" type="password" defaultValue="123"
        className="mb-2"/>
      <FormControl id="wd-firstname"
        placeholder="First Name" defaultValue="Alice"
        className="mb-2"/>
      <FormControl id="wd-lastname"
        placeholder="Last Name" defaultValue="Wonderland"
        className="mb-2"/>
      <FormControl id="wd-dob"
        placeholder="Date of Birth" type="date" defaultValue="2000-01-01"
        className="mb-2"/>
      <FormControl id="wd-email"
        placeholder="Email" type="email" defaultValue="alice@wonderland.com"
        className="mb-2"/>
      <FormSelect className="mb-4" >
          <option value="0" defaultChecked>User</option>
          <option value="1">Faculty</option>
      </FormSelect>
      
    
      <Link id="wd-signout-btn"
            href="/account/signin"
            className="btn btn-danger w-100 mb-2">
            Signout </Link>
    </div>
);}

