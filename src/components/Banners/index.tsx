// @ts-nocheck
import * as React from "react";
import ClientComponent from "./ClientComponent";
import PostFeed from "./PostFeed";
import Weather from "./Weather";

export default function BannersServerComponent() {
  return (
    <div className="p-4">
      <h3>Some server side text</h3>
      <p>
        Server server server server server server server. Release 3 test 
      </p>

      <section>
      <React.Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </React.Suspense>
      <React.Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </React.Suspense>
    </section>

      <ClientComponent />
    </div>
  );
}
