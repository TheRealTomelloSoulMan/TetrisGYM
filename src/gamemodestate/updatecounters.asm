gameModeState_updateCountersAndNonPlayerState:
        ; CHR bank used to be reset to 0 here
        lda #$00
        sta oamStagingLength
        inc fallTimer
        ; next code makes acc behave as normal
        ; (dont edit unless you know what you're doing)
        lda newlyPressedButtons_player1
        and #$20
        beq @ret
        lda displayNextPiece
        eor #$01
        sta displayNextPiece
@ret:   inc gameModeState ; 3
        rts
