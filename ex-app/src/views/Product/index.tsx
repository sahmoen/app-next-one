import React, { useState, useEffect } from "react";
import styles from "./Product.module.scss";
import { ProductType } from "@/types/product.type";

const ProductView = ({ products }: { products: ProductType[] }) => {
  const [skeletonCount, setSkeletonCount] = useState(0);

  useEffect(() => {
    const updateSkeletonCount = () => {
      const containerWidth =
        document.querySelector(`.${styles.product__content}`)?.clientWidth || 0;
      const itemWidth = 250; // Sesuaikan dengan lebar item termasuk padding/margin
      const count = Math.floor(containerWidth / itemWidth);
      setSkeletonCount(count);
    };

    updateSkeletonCount(); // Panggil fungsi saat komponen pertama kali dimuat
    window.addEventListener("resize", updateSkeletonCount); // Update saat ukuran layar berubah

    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>
      <div className={styles.product__content}>
        {products.length > 0
          ? products.map((product: ProductType) => (
              <div key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            ))
          : Array.from({ length: skeletonCount }).map((_, index) => (
              <div key={index} className={styles.product__content__skeleton}>
                <div className={styles.product__content__skeleton__image} />
                <div className={styles.product__content__skeleton__name} />
                <div className={styles.product__content__skeleton__category} />
                <div className={styles.product__content__skeleton__price} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductView;
