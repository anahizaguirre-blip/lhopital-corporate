// Loader de next/image: todas las imágenes se piden a Cloudinary con f_auto,q_auto y el ancho exacto.
// `src` es el public ID, opcionalmente precedido de transformaciones propias (p. ej. "e_trim/logo").
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "lhopital-moto";

type LoaderArgs = { src: string; width: number; quality?: number };

export default function cloudinaryLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("/") || src.startsWith("http")) return src;
  const q = quality ? `q_${quality}` : "q_auto";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,${q},c_limit,w_${width}/${src}`;
}
