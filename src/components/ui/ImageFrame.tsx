import Image from "next/image";
import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn, getAssetFilename, isPlaceholderAsset } from "@/lib/utils";

interface ImageFrameProps {
  src?: string;
  alt: string;
  title?: string;
  description?: string;
  icon?: LucideIcon;
  tone?: "blue" | "gold";
  priority?: boolean;
  sizes?: string;
  showFilename?: boolean;
  placeholderLayout?: "center" | "split";
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  showImageOverlay?: boolean;
}

export function ImageFrame({
  src,
  alt,
  title,
  description,
  icon: Icon = ImageIcon,
  tone = "blue",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  showFilename = true,
  placeholderLayout = "center",
  className,
  contentClassName,
  imageClassName,
  showImageOverlay = true,
}: ImageFrameProps) {
  const isPlaceholder = isPlaceholderAsset(src);
  const isGold = tone === "gold";
  const isSplit = placeholderLayout === "split";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background/62",
        isGold ? "border-gold-soft" : "border-blue-soft",
        className,
      )}
    >
      {isPlaceholder ? (
        <>
          <div className="absolute inset-0 grid-background opacity-60" />
          <div className={cn("absolute inset-0 opacity-75", isGold ? "radial-wash-gold" : "radial-wash")} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10" />
          <div
            className={cn(
              "relative flex h-full min-h-full flex-col px-4 py-6 sm:px-6 sm:py-8",
              isSplit
                ? "items-start justify-between text-left"
                : "items-center justify-center text-center",
              contentClassName,
            )}
          >
            <span
              className={cn(
                "grid place-items-center rounded-lg border",
                isSplit ? "size-11 sm:size-12" : "mb-5 size-12 sm:size-14",
                isGold
                  ? "border-gold-soft bg-gold/10 text-gold"
                  : "border-blue-soft bg-primary/12 text-neon",
              )}
            >
              <Icon className={isSplit ? "size-5 sm:size-6" : "size-6 sm:size-7"} aria-hidden="true" />
            </span>
            {title ? <p className="text-lg font-semibold text-foreground">{title}</p> : null}
            {description ? (
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{description}</p>
            ) : null}
            {showFilename ? (
              <p
                className={cn(
                  "max-w-full break-words font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted",
                  isSplit ? "mt-8" : "mt-6",
                )}
              >
                {getAssetFilename(src)}
              </p>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <Image
            src={src ?? ""}
            alt={alt}
            fill
            unoptimized
            priority={priority}
            sizes={sizes}
            className={cn("object-cover", imageClassName)}
          />
          {showImageOverlay ? (
            <div className="absolute inset-0 bg-gradient-to-t from-background/52 via-transparent to-transparent" />
          ) : null}
        </>
      )}
    </div>
  );
}
