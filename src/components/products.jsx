import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="col-sm-6 col-md-6">
      <div className={`product-card${flipped ? " is-flipped" : ""}`}>
        <div className="product-card-inner">
          <div className="product-card-front">
            <img
              src={product.image}
              className="img-responsive"
              alt={product.title}
            />
            <div className="product-card-body">
              <h4>{product.title}</h4>
              <p>{product.summary}</p>
              <button
                type="button"
                className="btn btn-custom"
                onClick={() => setFlipped(true)}
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="product-card-back">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            {product.features && (
              <ul className="product-card-features">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            <div className="product-card-actions">
              <a
                href="#contact"
                className="btn btn-custom page-scroll"
                onClick={() => setFlipped(false)}
              >
                Assinar
              </a>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => setFlipped(false)}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Products = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Produtos</h2>
          <p>
            Além de projetos sob medida, temos sistemas 100% prontos para uso,
            desenvolvidos com base em anos de experiência no setor e
            disponíveis por assinatura mensal para qualquer empresa do ramo.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((product, i) => (
                <ProductCard key={`${product.title}-${i}`} product={product} />
              ))
            : "Carregando..."}
        </div>
      </div>
    </div>
  );
};
