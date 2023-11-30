import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Sora",
        mono: ["Poppins"],
        roboto: "Roboto",
      },
    }),
    presetIcons(),
    presetTypography(),
  ],
});
