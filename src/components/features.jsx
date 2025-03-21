import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={{ marginTop: "40px" }}>Características</h2>
        </div>
        <div className="row" style={{ marginBottom: "20px" }}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p style={{ marginBottom: "40px" }}>{d.text}</p>
                </div>
              ))
            : "Carregando..."}
        </div>
      </div>
    </div>
  );
};
