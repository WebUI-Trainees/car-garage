import React from 'react';

// const LinkSectionItem = props => {
//   const { className, children, ...linkClasses } = props;

//   linkClasses.className = `image ${className}`;

//   return (
//     <a className="d-inline-block single-link">
//       <div {...linkClasses} />
//       <p className="title">{children}</p>
//     </a>
//   );
// };

const LinkSectionItem = () => (
  <a className="d-inline-block single-link">
    <p className="title" />
  </a>
);

export default LinkSectionItem;
