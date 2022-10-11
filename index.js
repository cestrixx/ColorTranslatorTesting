// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const { ColorTranslator } = require('colortranslator');

const translateColors = (value) => {
  console.log(
    '================================================================================='
  );
  console.log('VALUE: ', value);
  const color = new ColorTranslator(value);
  console.log('\nOBJECT COLOR TRANSLATOR');
  console.log(color);
  console.log('\nTRANSLATORS');
  console.log('HEX : ', color.HEX); // Get the the object hex representation of the color
  console.log('HEXA: ', color.HEXA); // Get the the object hexa representation of the color
  console.log('RGB : ', color.RGB); // Get the the object rgb representation of the color
  console.log('RGBA: ', color.RGBA); // Get the the object rgba representation of the color
  console.log('HSL : ', color.HSL); // Get the the object hsl representation of the color
  console.log('HSLA: ', color.HSLA); // Get the the object hsla representation of the color
  console.log('CMYK: ', color.CMYK); // Get the the object cmyk representation of the color
  console.log('H: ', color.H); // Get the color hue
  console.log('S: ', color.S); // Get the color saturation percentage
  console.log('L: ', color.L); // Get the color lightness percentage
  console.log('R: ', color.R); // Get the red value of the color
  console.log('G: ', color.G); // Get the green value of the color
  console.log('B: ', color.B); // Get the blue value of the color
  console.log('C: ', color.C); // Get the CMYK cyan percentage value of the color
  console.log('M: ', color.M); // Get the CMYK magenta percentage value of the color
  console.log('Y: ', color.Y); // Get the CMYK yellow percentage value of the color
  console.log('K: ', color.K); // Get the CMYK black percentage value of the color
  console.log('A: ', color.A); // Get the alpha value of the color
  console.log(
    '================================================================================='
  );
};

function runTranslateColorSample(sample) {
  switch (sample) {
    case 0: // Color keyword
      translateColors('fuchsia');
      break;
    case 1: // Hexadecimal color
      translateColors('#FF00FF');
      break;
    case 2: // Shorthand hexadecimal color
      translateColors('#F0F');
      break;
    case 3: // Hexadecimal color with alpha
      translateColors('#FF00FF80');
      break;
    case 4: // Functional RGB notation
      translateColors('rgb(255, 0, 255)');
      break;
    case 5: // Functional RGB notation with alpha
      translateColors('rgba(255, 0, 255, 0.5)');
      break;
    case 6: // Functional HSL notation
      translateColors('hsl(300, 100%, 50%)');
      break;
    case 7: // Functional HSL notation with alpha
      translateColors('hsla(300, 100%, 50%, 0.5)');
      break;
    case 8: // Functional CMYK notation with percentages
      translateColors('cmyk(0%, 100%, 100%, 0%)');
      break;
    case 9: // Functional CMYK notation with numbers
      translateColors('cmyk(0, 1, 1, 0)');
      break;
    case 10: // Device-dependent functional CMYK notation with percentages
      translateColors('device-cmyk(0%, 100%, 100%, 0%)');
      break;
    case 11: //	Device-dependent functional CMYK notation with numbers
      translateColors('device-cmyk(0, 1, 1, 0)');
      break;
    case 12: //	Hexadecimal color
      translateColors({ r: '0xFF', g: '0x00', b: '0xFF' });
      break;
    case 13: //	Shorthand hexadecimal color
      translateColors({ r: '0xF', g: '0x0', b: '0xF' });
      break;
    case 14: //	Hexadecimal color with alpha
      translateColors({ r: '0xFF', g: '0x00', b: '0xFF', a: '0x80' });
      break;
    case 15: // RGB notation
      translateColors({ r: 255, g: 0, b: 255 });
      break;
    case 16: //	RGB notation with alpha
      translateColors({ r: 255, g: 0, b: 255, a: 0.5 });
      break;
    case 17: //	HSL notation using percentages
      translateColors({ h: 300, s: '100%', l: '50%' });
      break;
    case 18: //	HSL notation using numbers
      translateColors({ h: 300, s: 100, l: 50 });
      break;
    case 19: //	HSL notation with alpha using percentages
      translateColors({ h: 300, s: '100%', l: '50%', a: 0.5 });
      break;
    case 20: //	HSL notation with alpha using numbers
      translateColors({ h: 300, s: 100, l: 50, a: 0.5 });
      break;
    case 21: //	CMYK notation using percentages
      translateColors({ c: '0%', m: '100%', y: '100%', k: '0%' });
      break;
    case 22: //	CMYK notation using numbers
      translateColors({ c: 0, m: 1, y: 1, k: 0 });
      break;
    case 23:
      {
        const color = new ColorTranslator('#FFFFFF');
        color.setH(120).setS(80).setA(0.5);
        console.log(color);
        color.setR(255).setG(150).setA(0.25);
        console.log(color);
      }
      break;
    case 24:
      {
        console.log('gold =>', ColorTranslator.toHEX('gold')); // #FFD700
        console.log('#FF00FF =>', ColorTranslator.toRGB('#FF00FF')); // rgb(255,0,255)
        console.log(
          'hsl(50, 20%, 90%) =>',
          ColorTranslator.toRGBA('hsl(50, 20%, 90%)')
        ); // rgba(235,233,224,1)
        console.log(
          'rgb(255, 0, 0) =>',
          ColorTranslator.toHSL('rgb(255, 0, 0)')
        ); // hsl(0,100%,50%)
        console.log(
          'rgba(0, 255, 255, 0.5) => ',
          ColorTranslator.toHSLA('rgba(0, 255, 255, 0.5)')
        ); // hsla(180,100%,50%,0.5)
        console.log('#F0F => ', ColorTranslator.toCMYK('#F0F', false)); // {c: 0, m: 100, y: 0, k: 0}
        console.log('#F0F => ', ColorTranslator.toCMYK('#F0F')); // cmyk(0%,100%,0%,0%)
        console.log(
          "{ h: 115, s: '70%', l: '45%' }",
          ColorTranslator.toRGB({ h: 115, s: '70%', l: '45%' })
        ); // rgb(48,195,34)
        console.log(
          '{ r: 115, g: 200, b: 150, a: 0.5 }',
          ColorTranslator.toHSLA({ r: 115, g: 200, b: 150, a: 0.5 })
        ); // hsla(145,44%,62%,0.5)
      }
      break;
  }
}

runTranslateColorSample(24);
