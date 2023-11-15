export function useColor() {
  const colorMode = useColorMode();

  const changeColor = () => {
    if (colorMode.preference === "light") {
      colorMode.preference = localStorage.theme = "dark";
    } else {
      colorMode.preference = localStorage.theme = "light";
    }
  }

  return {
    changeColor,
    colorMode
  }
}
