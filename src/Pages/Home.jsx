import "../Assets/Style.css";
import React from "react";
import Back from "../Assets/background.jpg";

export default function Home() {
  return (
    <>
      <section className="hero-frame">
        <img className="hero" src={Back} alt=".."/>
      </section>

      <section>
        <div class="row row-cols-md-3 py-5">
          <div class="col mb-4">
            <div class="card">
              <img src={Back} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card">
              <img src={Back} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card">
              <img src={Back} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
         </div>
          

        </div>
      </section>
    </>
  );
}
