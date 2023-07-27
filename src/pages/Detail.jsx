import React, { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getProduct } from "../products/Products.requests";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(+id).then((res) => {
      setProduct(res);
    });
  }, [id]);

  if (Object.keys(product).length === 0) return null;

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{product.title} </span>
          <p className="detail__info-description">{product.description}</p>
          <span className="detail__info-price">
            $
            {product.price.toLocaleString("es-UY", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <span className="detail__info-stock">¡Quedan solo {product.stock}!</span>
          <ItemCount stock={product.stock} onAdd={() => alert("Comprados")} />
        </div>
      </div>
    </div>
  );
};
