import { BsPlus } from "react-icons/bs";

import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
        <span className="me-2 wd-border-thin-round fs-6 p-1" > 40% of Total </span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );    }