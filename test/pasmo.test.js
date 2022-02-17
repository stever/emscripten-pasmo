import * as assert from "assert";
import pasmo from "../index.js";

describe('pasmo', () => {
    test('hello, world', () => {
        const asm = `
    org 30000

tv_flag    equ 5C3Ch

start
    ; Directs rst 10h output to main screen.
    xor a
    ld (tv_flag),a

    ld b, 50

another

    push bc

    ld hl,hello
again    ld a,(hl)
    cp 0
    jr z, exit
    push hl
    rst 10h
    pop hl
    inc hl
    jr again

exit
    pop bc
    djnz another
    ret

hello    db "Hello, world.", 0Dh, 0

    end start
        `;

        return pasmo(asm).then(
            result => {
                expect(JSON.stringify(result)).toBe("{\"0\":175,\"1\":50,\"2\":60,\"3\":92,\"4\":6,\"5\":50,\"6\":197,\"7\":33,\"8\":73,\"9\":117,\"10\":126,\"11\":254,\"12\":0,\"13\":40,\"14\":6,\"15\":229,\"16\":215,\"17\":225,\"18\":35,\"19\":24,\"20\":245,\"21\":193,\"22\":16,\"23\":238,\"24\":201,\"25\":72,\"26\":101,\"27\":108,\"28\":108,\"29\":111,\"30\":44,\"31\":32,\"32\":119,\"33\":111,\"34\":114,\"35\":108,\"36\":100,\"37\":46,\"38\":13,\"39\":0}");
                console.log('Tests OK!');
            },
            error => {
                assert.fail(error);
            }
        );
    });
})
