import React from "react";
import { Currencies } from "./content/Currencies";

export const Content = props => {
  return (
    <main className="main-section">
      <section className="container">
        <Currencies />
      </section>
    </main>
  );
};
