var GiantDiplomacyPuzzle = GiantDiplomacyPuzzle || (function() {
    //TODO support multiple puzzles
    //TODO make each puzzle a character sheet for persistent storage, otherwise
    //can bomb when API sandbox restarts
    const puzzles = { }

    function createPuzzle(options) {
        let opts = options || {};
        const anchorTop = opts.top || 400;
        const anchorLeft = opts.left || 400;

        const config = {
            initial: {
                purple: {
                    left: anchorLeft + 100,
                    top: anchorTop + 100
                },
                green: {
                    left: anchorLeft + 150,
                    top: anchorTop - 50
                },
                pink: {
                    left: anchorLeft + 298,
                    top: anchorTop
                },
                yellow: {
                    left: anchorLeft + 200,
                    top: anchorTop + 50,
                },
                blue: {
                    left: anchorLeft + 300,
                    top: anchorTop + 100,
                },
                red: {
                    left: anchorLeft + 350,
                    top: anchorTop + 200
                },
                orange: {
                    left: anchorLeft + 200,
                    top: anchorTop + 200
                }
            },
            cat: {
                purple: {
                    left: anchorLeft + 415,
                    top: anchorTop + 175,
                    rotation: -45
                },
                green: {
                    left: anchorLeft + 50,
                    top: anchorTop + 155,
                    rotation: 90
                },
                pink: {
                    left: anchorLeft + 345,
                    top: anchorTop + 105,
                    rotation: -45
                },
                yellow: {
                    left: anchorLeft + 490,
                    top: anchorTop - 140,
                    rotation: 90
                },
                blue: {
                    left: anchorLeft + 442,
                    top: anchorTop - 40,
                    rotation: 0
                },
                red: {
                    left: anchorLeft + 390,
                    top: anchorTop - 130,
                    rotation: 180
                },
                orange: {
                    left: anchorLeft + 200,
                    top: anchorTop + 200,
                    rotation: 0
                }
            },
            diamond: {
                purple: {
                    left: anchorLeft + 200,
                    top: anchorTop + 100,
                    rotation: 90
                },
                green: {
                    left: anchorLeft + 350,
                    top: anchorTop + 155,
                    rotation: 90
                },
                pink: {
                    left: anchorLeft + 200,
                    top: anchorTop + 200,
                    rotation: 90
                },
                yellow: {
                    left: anchorLeft + 200,
                    top: anchorTop + 350,
                    rotation: 0
                },
                blue: {
                    left: anchorLeft + 100,
                    top: anchorTop + 200,
                    rotation: 0
                },
                red: {
                    left: anchorLeft + 50,
                    top: anchorTop + 104,
                    rotation: 180
                },
                orange: {
                    left: anchorLeft + 200,
                    top: anchorTop - 100,
                    rotation: 0
                }
            },
            house: {
                purple: {
                    left: anchorLeft + 335,
                    top: anchorTop,
                    rotation: -90
                },
                green: {
                    left: anchorLeft + 140,
                    top: anchorTop + 30,
                    rotation: 135
                },
                pink: {
                    left: anchorLeft + 300,
                    top: anchorTop + 200,
                    rotation: 0
                },
                yellow: {
                    left: anchorLeft + 100,
                    top: anchorTop + 150,
                    rotation: 0
                },
                blue: {
                    left: anchorLeft + 210,
                    top: anchorTop - 110,
                    rotation: 45
                },
                red: {
                    left: anchorLeft + 50,
                    top: anchorTop + 200,
                    rotation: 180
                },
                orange: {
                    left: anchorLeft + 200,
                    top: anchorTop + 200,
                    rotation: 0
                }
            }

        };

        const purple = createObj("graphic", {
            subType: "token",
            left: config.initial.purple.left,
            top: config.initial.purple.top,
            width:200,
            height:400,
            imgsrc: 'https://s3.amazonaws.com/files.d20.io/images/93566809/iw45lqgxNFIOnR1zDlPcNg/thumb.png?1570232983',
            pageid: Campaign().get("playerpageid"),
            layer: "objects"
        });

        const green = createObj("graphic", {
            subType: "token",
            left: config.initial.green.left,
            top: config.initial.green.top,
            width:300,
            height:100,
            imgsrc: 'https://s3.amazonaws.com/files.d20.io/images/93566811/HLnviO6jNFs1JH3yquDUiQ/thumb.png?1570232983',
            pageid: Campaign().get("playerpageid"),
            layer: "objects"
        });

        const pink = createObj("graphic", {
            subType: "token",
            left: config.initial.pink.left,
            top: config.initial.pink.top,
            width:200,
            height:202,
            imgsrc: 'https://s3.amazonaws.com/files.d20.io/images/93566812/Ahk3weelk39Nqgo5IeGJ2g/thumb.png?1570232983',
            pageid: Campaign().get("playerpageid"),
            layer: "objects"
        });

        const yellow = createObj("graphic", {
            subType: "token",
            initialLeft: anchorLeft + 200,
            left: config.initial.yellow.left,
            top: config.initial.yellow.top,
            width:200,
            height:100,
            imgsrc: 'https://s3.amazonaws.com/files.d20.io/images/93566808/ANJn5E51l1uAUhmYpV_6Kg/thumb.png?15702329835',
            pageid: Campaign().get("playerpageid"),
            layer: "objects"
        });

        const blue = createObj("graphic", {
            subType: "token",
            left: config.initial.blue.left,
            top: config.initial.blue.top,
            width:200,
            height:198,
            imgsrc: 'https://s3.amazonaws.com/files.d20.io/images/93566813/4LO3qLBnBkmX3Z-sWQtT0g/thumb.png?1570232983',
            pageid: Campaign().get("playerpageid"),
            layer: "objects"
        });

        const red = createObj("graphic", {
            subType: "token",
            left: config.initial.red.left,
            top: config.initial.red.top,
            width:98,
            height:200,
            imgsrc: 'https://s3.amazonaws.com/files.d20.io/images/93567501/o8KJFn_G0F_ltiH7GLv6sw/thumb.png?1570233445',
            pageid: Campaign().get("playerpageid"),
            layer: "objects"
        });

        const orange = createObj("graphic", {
            subType: "token",
            left: config.initial.orange.left,
            top: config.initial.orange.top,
            width:400,
            height:201,
            imgsrc: 'https://s3.amazonaws.com/files.d20.io/images/93566814/8NUy4-XMAVBOpPP8FkL6Ig/thumb.png?1570232984',
            pageid: Campaign().get("playerpageid"),
            layer: "objects"
        });
        const puzzle = {
            purple: purple,
            green: green,
            pink: pink,
            yellow: yellow,
            blue: blue,
            red: red,
            orange: orange,
            solve: function(type, selected) {
                const ids = selected === undefined ? undefined : selected.map((sel) => { return sel._id;});
                Object.getOwnPropertyNames(this).forEach((prop) => {
                    if (typeof this[prop] !== 'function') {
                        if (ids === undefined || ids.includes(this[prop].get("id"))) {
                            this[prop].set("top", config[type][prop].top);
                            this[prop].set("left", config[type][prop].left);
                            this[prop].set("rotation", config[type][prop].rotation);
                        }
                    }
                });
            },
            reset: function(selected) {
                const ids = selected === undefined ? undefined : selected.map((sel) => { return sel._id;});
                Object.getOwnPropertyNames(this).forEach((prop) => {
                    if (typeof this[prop] !== 'function') {
                        if (ids === undefined || ids.includes(this[prop].get("id"))) {
                            this[prop].set("top", config.initial[prop].top);
                            this[prop].set("left", config.initial[prop].left);
                            this[prop].set("rotation", 0);
                        }
                    }
                });
            },
            destroy: function() {
                Object.getOwnPropertyNames(this).forEach((prop) => {
                    if (typeof this[prop] !== 'function') {
                        this[prop].remove();
                        delete this[prop];
                        delete this;
                    }
                });
            }
        }


        GiantDiplomacyPuzzle.puzzle = puzzle;
        return puzzle;
    }

    const solve = (type, selected) => {
        log(findFirstPuzzle(selected));
        GiantDiplomacyPuzzle.puzzle.solve(type, selected);
    }

    const reset = (selected) => {
        GiantDiplomacyPuzzle.puzzle.reset(selected);
    }

    const removePuzzle = () => {
        if (GiantDiplomacyPuzzle.puzzle) {
            GiantDiplomacyPuzzle.puzzle.destroy();
        }
    }

    const findFirstPuzzle = (selected) => {
        if (selected === undefined) {
            const keys = Object.getOwnPropertyNames(puzzles);
            if (keys === undefined) {
                return {};
            } else {
                return puzzles[keys[0]];
            }
        } else {
            const ids = selected === undefined ? undefined : selected.map((sel) => { return sel._id;});
            return Object.getOwnPropertyNames(puzzles).find((prop) => {
                return ids === undefined || ids.includes(prop);
            });
        }
    }

    const handleInput = function(msg) {
        if (msg.type !== "api") {
            return;
        }
        const mode = msg.content.match(/^!puzzle (--create|--reset|--solve|--destroy)/);
        if (mode && mode[1]) {
            log(mode[1])
            if (mode[1] === '--create') {
                let top = 400;
                let left = 400;
                const topM = msg.content.match(/.*--top:(\d+).*/);
                if (topM && topM[1]) {
                    top = parseInt(topM[1]);
                }
                const leftM = msg.content.match(/.*--left:(\d+).*/);
                if (leftM && leftM[1]) {
                    left = parseInt(leftM[1]);
                }
                createPuzzle({ top: top, left: left})
            } else if (mode[1] === '--solve') {
                const type = msg.content.match(/^.*--solve --(cat|diamond|house)/);
                solve(type && type[1] ? type[1] : 'cat', msg.selected);
            } else if (mode[1] === '--reset') {
                reset(msg.selected);
            } else if (mode[1] === '--destroy') {
                removePuzzle();
            }
        }
    }

    const registerEventHandlers = function() {
        on('chat:message', handleInput);
    };

    return {
        registerEventHandlers: registerEventHandlers
    };
}());

on('ready', () => {
    'use strict';
    GiantDiplomacyPuzzle.registerEventHandlers();
});