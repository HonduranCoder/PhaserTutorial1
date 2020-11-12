module.exports = [
    '#define SHADER_NAME PHASER_COPY_FS',
    '',
    'precision mediump float;',
    '',
    'uniform sampler2D uMainSampler;',
    'uniform float uBrightness;',
    '',
    'varying vec2 outTexCoord;',
    '',
    'void main ()',
    '{',
    '    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
    '',
    '    gl_FragColor = texture2D(uMainSampler, outTexCoord) * uBrightness;',
    '}',
    ''
].join('\n');
