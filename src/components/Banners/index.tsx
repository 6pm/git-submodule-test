import * as React from "react";
import ClientComponent from "./ClientComponent";

export default function BannersServerComponent() {
  return (
    <div className="p-4">
      <h3>Some server side text</h3>
      <p>
        Server server server server server server server. Release 2 
      </p>

      <ClientComponent />
    </div>
  );
}
