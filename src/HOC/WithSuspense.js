import React, { Suspense } from "react";

export default function WithSuspense(Component) {
  return props => (
    <Suspense fallback="Loading...">
      <Component {...props} />
    </Suspense>
  );
}
