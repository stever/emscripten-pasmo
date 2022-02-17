import * as assert from "assert";
import pasmo from "../index.js";

describe('pasmo', () => {
    test('hello, world', () => {
        const asm = `    org 30000

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

    end start`;

        return pasmo(asm).then(
            result => {
                expect(JSON.stringify(result)).toBe("{\"0\":19,\"1\":0,\"2\":0,\"3\":0,\"4\":108,\"5\":111,\"6\":97,\"7\":100,\"8\":101,\"9\":114,\"10\":32,\"11\":32,\"12\":32,\"13\":32,\"14\":71,\"15\":0,\"16\":10,\"17\":0,\"18\":71,\"19\":0,\"20\":27,\"21\":73,\"22\":0,\"23\":255,\"24\":0,\"25\":10,\"26\":13,\"27\":0,\"28\":253,\"29\":50,\"30\":57,\"31\":57,\"32\":57,\"33\":57,\"34\":14,\"35\":0,\"36\":0,\"37\":47,\"38\":117,\"39\":0,\"40\":13,\"41\":0,\"42\":20,\"43\":23,\"44\":0,\"45\":244,\"46\":50,\"47\":51,\"48\":54,\"49\":49,\"50\":48,\"51\":14,\"52\":0,\"53\":0,\"54\":58,\"55\":92,\"56\":0,\"57\":44,\"58\":50,\"59\":53,\"60\":53,\"61\":14,\"62\":0,\"63\":0,\"64\":255,\"65\":0,\"66\":0,\"67\":13,\"68\":0,\"69\":30,\"70\":5,\"71\":0,\"72\":239,\"73\":34,\"74\":34,\"75\":175,\"76\":13,\"77\":0,\"78\":40,\"79\":14,\"80\":0,\"81\":249,\"82\":192,\"83\":51,\"84\":48,\"85\":48,\"86\":48,\"87\":48,\"88\":14,\"89\":0,\"90\":0,\"91\":48,\"92\":117,\"93\":0,\"94\":13,\"95\":25,\"96\":19,\"97\":0,\"98\":0,\"99\":3,\"100\":111,\"101\":117,\"102\":116,\"103\":112,\"104\":117,\"105\":116,\"106\":46,\"107\":116,\"108\":97,\"109\":112,\"110\":40,\"111\":0,\"112\":48,\"113\":117,\"114\":0,\"115\":128,\"116\":186,\"117\":42,\"118\":0,\"119\":255,\"120\":175,\"121\":50,\"122\":60,\"123\":92,\"124\":6,\"125\":50,\"126\":197,\"127\":33,\"128\":73,\"129\":117,\"130\":126,\"131\":254,\"132\":0,\"133\":40,\"134\":6,\"135\":229,\"136\":215,\"137\":225,\"138\":35,\"139\":24,\"140\":245,\"141\":193,\"142\":16,\"143\":238,\"144\":201,\"145\":72,\"146\":101,\"147\":108,\"148\":108,\"149\":111,\"150\":44,\"151\":32,\"152\":119,\"153\":111,\"154\":114,\"155\":108,\"156\":100,\"157\":46,\"158\":13,\"159\":0,\"160\":164}");
                console.log('Tests OK!');
            },
            error => {
                assert.fail(error);
            }
        );
    });
})
