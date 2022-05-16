
# TetrisGYM

<div align="center">
    <img src="./screens/menu4.png" alt="Menuscreen">
    <br>
</div>
<br>

* [Getting Started](#getting-started)
* [Trainers](#trainers)
    * [Tetris](#tetris)
    * [T-Spins](#t-spins)
    * [Seed](#seed)
    * [Stacking](#stacking)
    * [Pace](#pace)
    * [Setups](#setups)
    * [B-Type](#b-type)
    * [Floor](#floor)
    * [(Quick)Tap](#quicktap)
    * [Transition](#transition)
    * [Garbage](#garbage)
    * [Drought](#drought)
    * [DAS Delay](#das-delay)
    * [Invisible](#invisible) 
    * [Hard Drop](#hard-drop) 
* [Tap/Roll Speed Tester](#taproll-speed-tester)
* [Hz Display](#hz-display) 
* [Input Display](#input-display)
* [Goofy Foot](#goofy-foot)
* [Block Tool](#block-tool)
    * [Level Editor](#level-editor)
    * [Savestates](#savestates)
* [Qualifier Mode](#qual-mode)
* [PAL Mode](#pal-mode)
* [Bugfixes](#bugfixes)
* [Resources](#resources)

## Getting Started

TetrisGYM is a modification of NES Tetris.

While originally based on the NTSC version of the game, the patched ROM supports PAL and NTSC gameplay types.

TetrisGYM is distributed in the form of a BPS patch and can be applied to the USA version of the game with [Rom PatcherJS](https://www.romhacking.net/patch/) or similar. 

`Unpatched File SHA-1: 77747840541BFC62A28A5957692A98C550BD6B2B`

A link to the BPS can be found on the [releases page](https://github.com/kirjavascript/TetrisGYM/releases).

## Trainers

Some trainers have additional configuration values; use left and right in the main menu to change them.

### Tetris

![Tetris](/screens/levelselect.png)

Same gameplay as A-Type, with some improvements: no score cap, no rocket, no curtain, always next box, better pause, extended level select.

### T-Spins

![T-Spins](/screens/tspins.png)

Spawn T-Spins in random positions. Additional entry delay on successful T-Spin to prepare for the next state.

### Seed

Provides same piece sets for VS battles (or practise).

Press `select` to generate a random seed.

The seed trainer was improved in v3.1 to give a 'better' distribution of cases.

Different versions of TetrisGYM can still share SPS by setting the fifth digit to 0.

### Stacking

![Stacking](/screens/stacking.png)

An experiment in highlighting areas of the playfield.

### Pace

![Pace](/screens/pace.png)

Indicates how close you are to achieving a score by 230 lines. Loosely based on Tetris rate.

You can choose scores up to and including 1.5m in increments of 100k.

This can be adjusted for transition or PAL games;

| value | score at 130 lines |
| ----- | ------------------ |
| 4 | 201261 |
| 5 | 252936 |
| 6 | 300278 |
| 7 | 353015 |
| 8 | 400356 |
| 9 | 452031 |
| A | 508690 |
| B | 552131 |
| C | 600535 |
| D | 655460 |
| E | 706051 |
| F | 752310 |

### Setups

![Setups](/screens/setups.png)

Several preset playfields for practising different types of tucks and spins.

0. Z
1. T / S
2. T
3. I
4. Buco
5. Various
6. L / J Spintuck
7. L / J Doubletuck

### B-Type

![B-Type](/screens/btype.png)

Same gameplay as B-Type in the original, except heights up to 8 are supported.

### Floor

![Floor](/screens/floor.png)

Fill in the floor to a certain height to force higher stacking. This mode is often referred to as 'handicap'.

Setting the height to zero will result in a game mode with burns disabled.

### (Quick)Tap

![Tap](/screens/tap.png)

For practising tapping and quicktapping pieces over towers. 0-G will have a tower on the left of the screen and H-W will have a tower to the right.

### Transition

![Transition](/screens/transition.png)

Puts you ten lines before transition. The value given will be added to your score, so set this to 5 and start on level 18 for a 'maxout trainer' style mode.

Setting the value to G causes the mode to act identical to the game genie code `SXTOKL`

### Garbage

![Garbage](/screens/garbage.png)

Different styles of garbage to dig through.

0. Always Tetris Ready - Pushes blocks to force tetris readiness
1. Normal Garbage - Random amounts of garbage
2. Smart Garbage - Follows your well
3. Hard Garbage - Brutal random garbage
4. Infinite Dig Generator - Scrambles the bottom of your stack

### Drought

Create artificially inflated droughts. Increasing the value causes less I pieces.

0 = normal gameplay I = no line pieces

### DAS Delay

Change the auto-shift delay rate.

### Invisible

![Invisible](/screens/invisible.png)

Blocks are invisible until the end of the game.

### Hard Drop

![Hard Drop](/screens/harddrop.png)

Press `select` or `up` to hard drop.

## Tap/Roll Speed Tester

Practise tapping rate outside of gameplay.

## Hz Display

![Hz Display](/screens/hz.png)

Shows the average tapping rate for each tap in a burst.

Also shows frames between spawn and first tap, and current tap direction.

## Input Display

![Controller](/screens/controller.png)

## Goofy Foot

Flips A/B, Start/Select, and inverts DPad directions like a Goofy Foot controller.

## Block Tool

![Block](/screens/block.png)

Allow more fine control over aspects of gameplay.

This is a config option only, and will enable the block tool globally. 

When enabled, press start to use the editors.

### Level Editor

* DPad  
        Move around  
* Select + Left/Right  
        Switch between piece and playfield editors

In piece mode

* A / B  
        Change the current piece
* A + B  
        Change the next piece

In playfield mode

* A  
        Draw block at cursor
* B  
        Delete block at cursor

### Savestates

When paused

* Select + Up  
        Increment save slot
* Select + Down  
        Decrement save slot
* Select + A  
        Save state
* Select + B  
        Load state

During gameplay

* Select + B  
        Load state

Savestates allow you to save and reload playfields as many times as you want. These configurations are stored on your cart, and will persist after poweroff.

Savestates require SRAM to work. Tested and working on Everdrive / Emulator / MiSTerFPGA.

Combined with the level editor, savestates are effective for practising specific scenarios.

## Qual Mode

![Legal](/screens/legal.png)

![Rocket](/screens/rocket.png)

Reintroduces the 'wait screens', intended for use in qualifiers where the the player would otherwise gain a time advantage skipping the rocket, legal and title screens.

Also reintroduces other classic features like the end game curtain, standard pause, and no next box.

These features make TetrisGYM work better with post processing tools like [NestrisChamps](https://github.com/timotheeg/nestrischamps) and [MaxoutClub](https://maxoutclub.com/).

You cannot use the Block Tool and Qual mode at the same time.

## PAL Mode

Dictate if the NTSC or PAL gameplay mechanics should be used. Should automatically detect region, but can be manually overwritten otherwise.

## Bugfixes

TetrisGYM fixes some well known bugs in the original game;

- Resetting during a tetris no longer creates an invalid state
- Level numbers are correct past level 29
- Tetrimino colours are correct past level 138
- Game no longer crashes after ~1550 lines

## Resources

Tools and references: [https://github.com/ejona86/taus](https://github.com/ejona86/taus)  
Disassembly, based on work from TAUS: [https://github.com/CelestialAmber/TetrisNESDisasm](https://github.com/CelestialAmber/TetrisNESDisasm)  
