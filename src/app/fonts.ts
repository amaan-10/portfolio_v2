import localFont from "next/font/local";

/* =========================
   COMPACT
========================= */
export const gothicCompact = localFont({
  src: [
    {
      path: "../../public/fonts/PPRightGothic-CompactBlack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-CompactDark.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-CompactFineItalic.woff",
      weight: "200",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-gothic-compact",
});

/* =========================
   WIDE
========================= */
export const gothicWide = localFont({
  src: [
    {
      path: "../../public/fonts/PPRightGothic-WideBlack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-WideMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-WideMediumItalic.woff",
      weight: "500",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-gothic-wide",
});

/* =========================
   SPATIAL
========================= */
export const gothicSpatial = localFont({
  src: [
    {
      path: "../../public/fonts/PPRightGothic-SpatialBlack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-SpatialBlackItalic.woff",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/PPRightGothic-SpatialFine.woff",
      weight: "200",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gothic-spatial",
});

/* =========================
   TALL
========================= */
export const gothicTall = localFont({
  src: [
    {
      path: "../../public/fonts/PPRightGothic-TallRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-TallFine.woff",
      weight: "200",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gothic-tall",
});

/* =========================
   TIGHT
========================= */
export const gothicTight = localFont({
  src: [
    {
      path: "../../public/fonts/PPRightGothic-TightMedium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gothic-tight",
});

/* =========================
   NARROW
========================= */
export const gothicNarrow = localFont({
  src: [
    {
      path: "../../public/fonts/PPRightGothic-NarrowLight.woff",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gothic-narrow",
});

/* =========================
   STANDARD
========================= */
export const gothicStandard = localFont({
  src: [
    {
      path: "../../public/fonts/PPRightGothic-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPRightGothic-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-gothic-standard",
});
