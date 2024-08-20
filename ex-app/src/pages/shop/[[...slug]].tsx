import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  let valueSlug: string;

  // Fungsi untuk mengkapitalisasi huruf pertama dari sebuah string
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (Array.isArray(query.slug)) {
    // Kapitalisasi huruf pertama dari setiap elemen dalam array
    valueSlug = query.slug.map(capitalizeFirstLetter).join(" - ");
  } else {
    // Jika query.slug bukan array, kapitalisasi jika ada, jika tidak gunakan string kosong
    valueSlug = query.slug ? capitalizeFirstLetter(query.slug) : "";
  }

  return (
    <div>
      <h1>Shop Page</h1>
      <p>Shop: {valueSlug}</p>
    </div>
  );
};

export default ShopPage;
