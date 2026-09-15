// Real project visuals extracted from the Figma source file
// (pULp5giaNMkxaVYluRHWJT) via the Figma images API. Projects without a
// dedicated Figma frame (salud, gobierno, gabo, 321-ignition) keep the
// CSS-composed placeholder visuals.

const P = `${process.env.PUBLIC_URL || ""}/images/projects`;

export const PROJECT_MEDIA = {
  "fundacion-santa-fe": { card: `${P}/fundacion-santa-fe-card.jpg`, board: `${P}/fundacion-santa-fe-board.jpg` },
  "telefonica-movistar": { card: `${P}/telefonica-movistar-card.jpg`, board: `${P}/telefonica-movistar-board.jpg` },
  "datarips": { card: `${P}/datarips-card.jpg`, board: `${P}/datarips-board.jpg` },
  "corporal-move": { card: `${P}/corporal-move-card.jpg`, board: `${P}/corporal-move-board.jpg` },
  "wealth-ocean": { card: `${P}/wealth-ocean-card.jpg`, board: `${P}/wealth-ocean-board.jpg` },
  "mediqu": { card: `${P}/mediqu-card.jpg`, board: `${P}/mediqu-board.jpg` },
  "gabo": {
    card: `${P}/gabo-card.jpg`,
    gallery: [`${P}/gabo-1.jpg`, `${P}/gabo-2.jpg`, `${P}/gabo-3.jpg`],
  },
  "321-ignition": {
    card: `${P}/321-ignition-card.jpg`,
    gallery: [`${P}/321-responsive.jpg`, `${P}/321-hand.jpg`, `${P}/321-cms.jpg`, `${P}/321-analytics.jpg`],
  },
};

export const DS_IMAGES = [
  `${P}/design-system-colors.jpg`,
  `${P}/design-system-typography.jpg`,
  `${P}/design-system-buttons.jpg`,
];
