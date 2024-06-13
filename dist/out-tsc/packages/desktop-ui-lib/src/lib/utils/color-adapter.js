"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorAdapter = void 0;
const color_1 = require("@kurkle/color");
class ColorAdapter {
    static hex2Rgb(hex) {
        hex = this.normalize(hex);
        return (0, color_1.rgbString)({
            r: parseInt(hex.slice(1, 3), 16),
            g: parseInt(hex.slice(3, 5), 16),
            b: parseInt(hex.slice(5, 7), 16),
            a: 1
        });
    }
    static normalize(hex) {
        const regex = /^#[0-9A-F]{6}$/i;
        if (regex.test(hex)) {
            return hex;
        }
        else {
            hex = '#' + hex;
            return regex.test(hex) ? hex : '#000000';
        }
    }
    static contrast(bgColor) {
        let color = new color_1.Color(bgColor);
        color = color.valid ? color : new color_1.Color(this.hex2Rgb(bgColor));
        const MIN_THRESHOLD = 128;
        const MAX_THRESHOLD = 186;
        const contrast = color.rgb ? color.rgb.r * 0.299 + color.rgb.g * 0.587 + color.rgb.b * 0.114 : null;
        if (contrast < MIN_THRESHOLD) {
            return '#ffffff';
        }
        else if (contrast > MAX_THRESHOLD) {
            return '#000000';
        }
    }
    static background(bgColor) {
        const color = new color_1.Color(bgColor);
        return color.valid ? bgColor : this.normalize(bgColor);
    }
    static hexToHsl(hexColor) {
        let color = new color_1.Color(hexColor);
        color = color.valid ? color : new color_1.Color(this.hex2Rgb(hexColor));
        return color.hslString();
    }
    static randomColor() {
        const color = new color_1.Color({
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256),
            a: 1
        });
        return color.hexString().toString();
    }
}
exports.ColorAdapter = ColorAdapter;
//# sourceMappingURL=color-adapter.js.map