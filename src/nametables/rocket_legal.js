const {
    readStripe,
    writeRLE,
    drawTiles,
    flatLookup,
    drawRect,
    drawAttrs,
} = require('./nametables');

const legal = Array.from({ length: 1024 }, () => 0xFF);
//const legal = readStripe(__dirname + '/game_type_menu_nametable.bin');
const rocket = [...legal];

const lookup = flatLookup(`
0123456789ABCDEF
GHIJKLMNOPQRSTUV
WXYZ-.˙>qweadzxc
################
################
################
################
################
################
################
################
################
################
################
################
###############
`);

drawTiles(rocket, lookup, `
################################
################################
################################
################################
################################
################################
############          ##########
############  ROCKET  ##SCORE###
############  SCREEN  ##########
############          ##########
############          ##########
############          ##LINES###
############          ##########
############          ##########
############          ##########
############          ##LEVEL###
############          ##########
############          ##########
############          ##########
############          ##START###
############          ##########
############          ##########
############          ##########
############          ##########
############          ##########
############          ##########
################################
################################
################################
################################
`);

// drawRect(rocket, -2, 11, 9, 6, 0x30);

drawTiles(legal, lookup, `
################################
################################
################################
#########LEGAL  SCREEN##########
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
################################
######SOMETHING TO DO WITH######
########ALEXEY PAZHITNOV########
################################
########CLASSICTETRIS.ES########
################################
################################
################################
`);
drawRect(legal, 9, 10, 8, 8, 0x38); // draw logo

drawAttrs(rocket, [`
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
`,`
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
`]);

drawAttrs(legal, [`
    0000222222220000
    0000222222220000
    0000000000000000
    0000000000000000
    0000011111000000
    0000011111000000
    0000011111000000
    0000011111000000
`,`
    0000000333000000
    0000000000000000
    0000000000000000
    2222222222222222
    1111111111111111
    2222222222222222
    1111111111111111
    1111111111111111
`]);

writeRLE(
    __dirname + '/rocket_nametable.bin',
    rocket,
);

writeRLE(
    __dirname + '/legal_nametable.bin',
    legal,
);
