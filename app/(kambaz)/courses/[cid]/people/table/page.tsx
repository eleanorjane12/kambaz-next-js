"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../Table";
import * as client from "../../../client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
        console.log("cid:", cid);
       console.log("users:", users);
      const user = await client.findUsersForCourse(cid as string);
      setUsers(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div id="wd-people">
      <h2>People</h2>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}