import React from "react";
import { Col, Row } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import img from "../../../images/user.png";

const UserList = ({ users, setUsers, user, setUsersLoading }) => {
   const { _id, displayName, email, role } = user;

   // order delete
   const handleUserDelete = (id) => {
      const deleteApi = window.confirm("Do you want to delete this?");
      if (deleteApi) {
         const url = `http://localhost:8080/users/${id}`;
         fetch(url, {
            method: "DELETE",
            headers: {
               "content-type": "application/json",
               Accept: "application/json",
            },
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount) {
                  alert("Deleted Successfully");
                  const remaining = users.filter((order) => order._id !== id);
                  setUsers(remaining);
               }
            });
      }
   };

   // update role
   const roleModerator = { role: "moderator" };
   const handleUpdateRole = (id, role) => {
      const url = `http://localhost:8080/users/${id}`;
      fetch(url, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(role),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
               alert(`Updated Successfully`);
               handleRefresh();
            }
         });
   };

   const handleRefresh = () => {
      setUsersLoading(true);
      const url = `http://localhost:8080/users`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setUsers(data);
            console.log(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setUsersLoading(false));
   };

   return (
      <div className="col-12 col-lg-11 col-xl-10 mx-auto">
         <Row className="list_item ">
            <Col className="my-auto hide_div">
               <div className="figure">
                  <img
                     className="img-fluid"
                     src={img}
                     style={{ padding: "1rem" }}
                     alt=""
                  />
               </div>
            </Col>
            <Col className="my-auto">
               <h4>{displayName}</h4>
            </Col>
            <Col className="my-auto ">
               <h4>{email}</h4>
            </Col>

            <Col className="my-auto">
               {" "}
               <p
                  className={
                     (role === "admin" && "admin") ||
                     (role === "moderator" && "moderator") ||
                     "member"
                  }
               >
                  {role ? role : "member"}
               </p>
            </Col>
            <Col sm={2} className="action">
               <div>
                  <button
                     className="put"
                     onClick={() => {
                        handleUpdateRole(_id, roleModerator);
                     }}
                  >
                     <MdIcons.MdAddModerator />
                  </button>
               </div>
               <div>
                  <button className="reject" onClick={handleRefresh}>
                     <MdIcons.MdAutorenew />
                  </button>
               </div>
               <div>
                  <button
                     className="del"
                     onClick={() => {
                        handleUserDelete(_id);
                     }}
                  >
                     <MdIcons.MdDeleteOutline />
                  </button>
               </div>
            </Col>
         </Row>
      </div>
   );
};

export default UserList;
