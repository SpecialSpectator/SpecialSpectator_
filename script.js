// === PLAYER DATA MANAGER & SMOOTH CAMERA (FINAL STABLE) ===
(function () {

    let backupPlayerIds = [];

    const lerp = (a, b, t) => a + (b - a) * t;

    function updatePlayerBackup() {
        if (_0x1e530a && _0x594e41 &&
            _0x1e530a.length > 0 &&
            _0x594e41.length > 0) {

            backupPlayerIds = _0x1e530a.slice();
        }
    }

    function restoreFromBackup() {
        if (!backupPlayerIds.length) return;

        let restoredIds = [];
        let restoredCells = [];

        for (let i = 0; i < backupPlayerIds.length; i++) {
            const id = backupPlayerIds[i];
            const cell = _0x2e2fc6[id];

            if (cell) {
                restoredIds.push(id);
                restoredCells.push(cell);
            }
        }

        if (restoredIds.length) {
            _0x1e530a = restoredIds;
            _0x594e41 = restoredCells;
        }
    }

    function updateCamera() {

        if (!_0x594e41 || !_0x594e41.length) return;

        let avgX = 0;
        let avgY = 0;

        for (let i = 0; i < _0x594e41.length; i++) {
            avgX += _0x594e41[i].x;
            avgY += _0x594e41[i].y;
        }

        avgX /= _0x594e41.length;
        avgY /= _0x594e41.length;

        // Daha stabil smoothing (titreme azaltılmış)
        _0x243c75 = lerp(_0x243c75, avgX, 0.15);
        _0x8594d2 = lerp(_0x8594d2, avgY, 0.15);

        window.lastValidCenter = {
            x: _0x243c75,
            y: _0x8594d2
        };
    }

    function gameLoop() {

        if (!_0x1e530a || !_0x594e41 ||
            !_0x1e530a.length ||
            !_0x594e41.length) {

            restoreFromBackup();
        } else {
            updatePlayerBackup();
        }

        updateCamera();

        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);

})();
