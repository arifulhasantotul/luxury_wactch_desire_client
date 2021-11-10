import React from "react";
import Shimmer from "./Shimmer";
import Skeleton from "./Skeleton";

const SkeletonArticle = ({ theme }) => {
   const themeClass = theme || "light";

   return (
      <div className={`skeleton_wrapper ${themeClass}`}>
         <div className="skeleton_article">
            <Skeleton type="title" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
         </div>
         <Shimmer />
      </div>
   );
};

export default SkeletonArticle;
