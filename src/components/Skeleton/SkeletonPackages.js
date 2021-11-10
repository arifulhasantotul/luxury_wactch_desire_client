import React from "react";
import Skeleton from "./Skeleton";

const SkeletonPackages = () => {
   return (
      <div className="skeleton_wrapper">
         <div className="skeleton_packages">
            <div>
               <Skeleton type="image" />
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

export default SkeletonPackages;
