declare module "*.jsx" {
  const Component: any;
  export default Component;
}

declare module "*.tsx" {
  import * as React from "react";
  const Component: React.FunctionComponent<any>;
  export default Component;
}
