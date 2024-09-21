import React from 'react'
import classes from "./category.module.css"

function CategoryCard({data}) {
  return (
    <section className={classes.category}>
      <a href="#">
        <span>
          <h2>{data?.title}</h2>
        </span>
          <img src={data?.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </section>
  );
}

export default CategoryCard
