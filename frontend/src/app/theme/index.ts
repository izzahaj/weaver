import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

// color swatches: https://smart-swatch.netlify.app/
const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('blackAlpha.800', 'ivory.50')(props),
        bg: mode('ivory.50', 'gray.800')(props)
      }
    })
  },
  colors: {
    dolphinGrey: {
      50: "#e6f7f2",
      100: "#cedfd9",
      200: "#b5c8c2",
      300: "#9ab0a9",
      400: "#7f9a90",
      500: "#658077",
      600: "#4e645c",
      700: "#354842",
      800: "#1d2c27",
      900: "#00110b"
    },
    brown: {
      50: "#ffeeeb",
      100: "#e7d0cd",
      200: "#d2b3ad",
      300: "#be958d",
      400: "#ab776c",
      500: "#925e53",
      600: "#724841",
      700: "#52332d",
      800: "#331e1a",
      900: "#180704",
    },
    ivory: {
      50: "#f4f1f0",
      100: "#d9d6d6",
      200: "#c2bbb9",
      300: "#ac9f9c",
      400: "#97837e",
      500: "#7e6a65",
      600: "#61524f",
      700: "#453b39",
      800: "#292322",
      900: "#0f0b0b",
    },
    oliveGreen: {
      50: "#eff4ea",
      100: "#d8dbd4",
      200: "#c0c4bb",
      300: "#a6aca1",
      400: "#8e9486",
      500: "#757b6d",
      600: "#5a5f54",
      700: "#40443b",
      800: "#262922",
      900: "#0a0f04",
    },
    maroon: {
      50: "#ffe8ea",
      100: "#f1c2c7",
      200: "#e39ba4",
      300: "#d87484",
      400: "#cc4d64",
      500: "#b23350",
      600: "#8b2841",
      700: "#641c31",
      800: "#3e0e1a",
      900: "#1a0307",
    }
  }
});

export default theme;
