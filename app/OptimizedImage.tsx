/* eslint-disable @next/next/no-img-element -- Images are statically resized and compressed for the Cloudflare build. */

type OptimizedImageProps = {
  alt: string;
  baseName: string;
  className?: string;
  eager?: boolean;
  height: number;
  sizes: string;
  width: number;
  widths: readonly number[];
};

export default function OptimizedImage({
  alt,
  baseName,
  className,
  eager = false,
  height,
  sizes,
  width,
  widths,
}: OptimizedImageProps) {
  const largestWidth = Math.max(...widths);
  const srcSet = widths
    .map((candidateWidth) => `/images/${baseName}-${candidateWidth}.webp ${candidateWidth}w`)
    .join(", ");

  return (
    <img
      src={`/images/${baseName}-${largestWidth}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
    />
  );
}
