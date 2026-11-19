// WCAG 2.1 Contrast Ratio Checker for Theme Tokens

function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");
  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function getLuminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const s = val / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(hex1, hex2) {
  const l1 = getLuminance(hexToRgb(hex1));
  const l2 = getLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const lightTheme = {
  background: "#f4f4f4",
  surface: "#F2EDE4",
  foreground: "#1C1814",
  foregroundMuted: "#5A5147",
  foregroundSubtle: "#6F6556",
  primaryText: "#7A5C22",
  secondary: "#1F5A47",
  secondaryForeground: "#FAF7F2",
  primary: "#B08D4A",
  primaryForeground: "#14110D",
  accent: "#8F5A2E",
  success: "#2F6B4A",
  error: "#A8352B",
  warning: "#885D0D", // Adjusted from #9A6A14 to pass WCAG AA (>=4.5:1 on surface)
  info: "#7A6A4E",
};

const darkTheme = {
  background: "#0F0D0B",
  surface: "#18150F",
  foreground: "#F3ECDF",
  foregroundMuted: "#BDB2A0",
  foregroundSubtle: "#968B78",
  primaryText: "#D4AF6A",
  secondary: "#5FB38E",
  secondaryForeground: "#0F0D0B",
  primary: "#D4AF6A",
  primaryForeground: "#14110D",
  accent: "#C58A5B",
  success: "#6FBF8E",
  error: "#E57A6C",
  warning: "#E0A84A",
  info: "#C9B08A",
};

function checkPairs(themeName, theme) {
  console.log(`\n=== ${themeName} Theme ===`);
  const bgs = [
    { name: "background", color: theme.background },
    { name: "surface", color: theme.surface },
  ];

  const textTokens = [
    { name: "foreground", color: theme.foreground, min: 4.5 },
    { name: "foregroundMuted", color: theme.foregroundMuted, min: 4.5 },
    { name: "foregroundSubtle", color: theme.foregroundSubtle, min: 4.5 },
    { name: "primaryText", color: theme.primaryText, min: 4.5 },
    { name: "accent", color: theme.accent, min: 4.5 },
    { name: "success", color: theme.success, min: 4.5 },
    { name: "error", color: theme.error, min: 4.5 },
    { name: "warning", color: theme.warning, min: 4.5 },
    { name: "info", color: theme.info, min: 4.5 },
  ];

  let allPass = true;
  bgs.forEach((bg) => {
    console.log(`\n  vs ${bg.name} (${bg.color}):`);
    textTokens.forEach((txt) => {
      const ratio = getContrast(txt.color, bg.color);
      const pass = ratio >= txt.min;
      if (!pass) allPass = false;
      console.log(
        `    ${pass ? "✓" : "✗"} ${txt.name}: ${ratio.toFixed(2)}:1 ${pass ? "" : `[FAIL — need ${txt.min}]`}`
      );
    });
  });

  const primBtn = getContrast(theme.primaryForeground, theme.primary);
  const secBtn = getContrast(theme.secondaryForeground, theme.secondary);
  console.log(`\n  Button checks:`);
  console.log(
    `    ${primBtn >= 4.5 ? "✓" : "✗"} primaryForeground on primary: ${primBtn.toFixed(2)}:1`
  );
  console.log(
    `    ${secBtn >= 4.5 ? "✓" : "✗"} secondaryForeground on secondary: ${secBtn.toFixed(2)}:1`
  );
  if (primBtn < 4.5 || secBtn < 4.5) allPass = false;

  return allPass;
}

const lp = checkPairs("LIGHT", lightTheme);
const dp = checkPairs("DARK", darkTheme);
console.log(
  `\n${lp && dp ? "All pairs pass WCAG AA." : "Some pairs FAIL — adjust token values."}`
);
process.exit(lp && dp ? 0 : 1);
