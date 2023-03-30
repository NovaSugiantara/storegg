import React from "react";

interface StatItemProps {
  number: string;
  description: string;
}

export default function StatItem(props: StatItemProps) {
  const { number, description } = props;

  return (
    <div className="me-lg-35 ms-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {number}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {description}
      </p>
    </div>
  );
}
