import React from "react";
import Skeleton from "./Skeleton";

const SkeletonProfile = ({ theme }) => {
   const themeClass = theme || "light";
   return (
      <div className={`skeleton_wrapper ${themeClass}`}>
         <div className="skeleton_profile">
            <div>
               <Skeleton type="avatar" />
            </div>
            <div>
               <Skeleton type="title" />
               <Skeleton type="text" />
               <Skeleton type="text" />
            </div>
         </div>
      </div>
   );
};

export default SkeletonProfile;
