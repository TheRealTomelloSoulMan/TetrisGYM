const {
    writeRLE,
    drawTiles,
    flatLookup,
    drawRect,
    drawAttrs,
} = require('./nametables');

const legal = Array.from({ length: 1024 }, () => 0xFF);
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
############qwwwwwwwwwe#########
##qwwwwwwe##aLINES-   d#########
##a      d##zxxxxxxxxxc#########
##zxxxxxxc######################
############          #qwwwwwwe#
############  ROCKET  #aSCORE d#
#qwwwwwwwwe#  SCREEN  #a      d#
#a        d#          #zxxxxxxc#
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#a        d#          #qwwwwwe##
#a        d#          #aLEVELd##
#a        d#          #a  -  d##
#a        d#          #zxxxxxc##
#a        d#          ##########
#a        d#          ##########
#a        d#          ##########
#zxxxxxxxxc#####################
################################
################################
################################
`);

drawRect(rocket, 0, 15, 6, 10, 0x50);

drawTiles(legal, lookup, `
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
######SOMETHING TO DO WITH######
########ALEXEY PAZHITNOV########
################################
################################
################################
################################
################################
`);

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
    2222222222222222
    2222222222222222
    2222222222222222
    2222222222222222
    2222222222222222
    2222222222222222
    2222222222222222
    2222222222222222
`,`
    2222222222222222
    2222222222222222
    2222222222222222
    2222222222222222
    1111111111111111
    1111111111111111
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
