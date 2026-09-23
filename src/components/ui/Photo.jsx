import Image from "next/image";
import { photo } from "@/lib/images";

/**
 * Standard treatment for every photograph: fixed aspect ratio, rounded,
 * hairline border so it sits inside the design rather than on top of it,
 * and a blur placeholder from the static import so nothing shifts.
 *
 * `sizes` matters — without it Next serves a desktop-width file to phones.
 */
export function Photo({
  name,
  alt,
  className = "",
  ratio = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  rounded = "rounded-2xl",
}) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${ratio} border border-hairline bg-surface ${className}`}
    >
      <Image
        src={photo(name)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="object-cover"
      />
    </div>
  );
}
