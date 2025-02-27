import React from 'react';

export default function ListTemplate({ src, render }) {
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          {render(elem)}
        </React.Fragment>
      ))}
    </dl>
  );
}
