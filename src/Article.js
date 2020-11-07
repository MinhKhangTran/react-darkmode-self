import React from "react";
import moment from "moment";

const Article = ({ title, date, length, snippet }) => {
  return (
    <article className="my-4 w-11/12 md:w-2/3 mx-auto capitalize">
      <h1 className="titel text-xl md:text-2xl font-bold">{title}</h1>
      <span className="italic mr-4">{moment(date).format("MMMM, Do YYYY")}</span>
      <span className="italic">{length} min read</span>
      <p>{snippet}</p>
    </article>
  );
};
export default Article;
