var _0x53a645 = _0x28d8;
(function (_0x1cb60a, _0x348293) {
    var _0x4d4ef2 = _0x28d8,
        _0x1c9a1f = _0x1cb60a();
    while (!![]) {
        try {
            var _0x4741e8 = parseInt(_0x4d4ef2(0x1ce)) / 0x1 * (-parseInt(_0x4d4ef2(0x329)) / 0x2) + parseInt(_0x4d4ef2(0x2e6)) / 0x3 + -parseInt(_0x4d4ef2(0x2a0)) / 0x4 * (-parseInt(_0x4d4ef2(0x29b)) / 0x5) + -parseInt(_0x4d4ef2(0x2ae)) / 0x6 * (parseInt(_0x4d4ef2(0x1b8)) / 0x7) + -parseInt(_0x4d4ef2(0x256)) / 0x8 + parseInt(_0x4d4ef2(0x20d)) / 0x9 + parseInt(_0x4d4ef2(0x2cf)) / 0xa * (-parseInt(_0x4d4ef2(0x2b0)) / 0xb);
            if (_0x4741e8 === _0x348293) break;
            else _0x1c9a1f['push'](_0x1c9a1f['shift']());
        } catch (_0x231424) {
            _0x1c9a1f['push'](_0x1c9a1f['shift']());
        }
    }
}(_0xf0f6, 0xcb047), window[_0x53a645(0x225)] = [], window['started'] = ![], window['start'] = () => {
    var _0x327871 = _0x53a645;
    window[_0x327871(0x1f7)] = !![];
    
    // Her botun kac kere spec cagiracagini belirleyen sayaç
    window.botSirasi = 0;
    
    class _0x22f999 {
        constructor(_0x53f296, _0x3cfa09) {
            var _0x3f7202 = _0x327871;
            this['token'] = _0x3cfa09;
            this['botNo'] = window.botSirasi; // Bot sırasını kaydet
            window.botSirasi++; // Sıradaki bot için arttır
            console.log('Bot #' + this['botNo'] + ' oluşturuldu, bu bot ' + (this['botNo'] + 1) + '. oyuncuyu izleyecek');
            this[_0x3f7202(0x27a)](_0x53f296);
        } [_0x327871(0x27a)](_0x12448d) {
            var _0x337a80 = _0x327871;
            this[_0x337a80(0x263)] = !![], this[_0x337a80(0x2ec)] = _0x12448d, this['ws'] = new WebSocket(_0x12448d), this['ws'][_0x337a80(0x261)] = _0x337a80(0x205), this['ws']['onmessage'] = this[_0x337a80(0x290)][_0x337a80(0x2ab)](this), this['ws']['onopen'] = this[_0x337a80(0x1aa)]['bind'](this), this['ws'][_0x337a80(0x2f1)] = this[_0x337a80(0x19e)][_0x337a80(0x2ab)](this), this['ws'][_0x337a80(0x215)] = this['onError']['bind'](this);
        } [_0x327871(0x290)](_0x138ab0) {
            var _0x99c6a0 = _0x327871,
                _0x9437e8 = new DataView(_0x138ab0['data']),
                _0x301a6b = 0x0;
            0xf0 == _0x9437e8[_0x99c6a0(0x267)](_0x301a6b) && (_0x301a6b += 0x5);
            var _0xc97bdc = _0x9437e8['getUint8'](_0x301a6b++);
            switch (_0xc97bdc) {
            case 0x10:
                window[_0x99c6a0(0x266)](_0x9437e8, _0x301a6b);
                break;
            }
        } [_0x327871(0x1a7)]() {
            var _0x5f1c85 = this['Buffer'](0x1);
            _0x5f1c85['setUint8'](0x0, 0x1), this['send'](_0x5f1c85);
        } [_0x327871(0x181)](_0x570c78) {
            return new Promise(_0x23ecaf => setTimeout(_0x23ecaf, _0x570c78));
        } [_0x327871(0x2c2)](_0x2b8dc1) {
            var _0x4d25bd = _0x327871,
                _0x310d23 = this[_0x4d25bd(0x26f)](0x1 + 0x2 * _0x2b8dc1[_0x4d25bd(0x2ca)]);
            _0x310d23[_0x4d25bd(0x25c)](0x0, 0x32);
            for (var _0xd7697e = 0x0; _0xd7697e < _0x2b8dc1[_0x4d25bd(0x2ca)]; ++_0xd7697e) {
                _0x310d23[_0x4d25bd(0x25b)](0x1 + 0x2 * _0xd7697e, _0x2b8dc1[_0x4d25bd(0x316)](_0xd7697e), !![]);
            }
            this[_0x4d25bd(0x20a)](_0x310d23);
        } ['onOpen']() {
            var _0x1959b5 = _0x327871,
                _0x1992dd = this[_0x1959b5(0x26f)](0x5);
            _0x1992dd[_0x1959b5(0x25c)](0x0, 0xfe), _0x1992dd['setUint32'](0x1, 0x4, !![]), this['send'](_0x1992dd);
            var _0x1992dd;
            _0x1992dd = this[_0x1959b5(0x26f)](0x5), _0x1992dd[_0x1959b5(0x25c)](0x0, 0xff), _0x1992dd[_0x1959b5(0x243)](0x1, 0x4f676172, !![]), this[_0x1959b5(0x20a)](_0x1992dd), this['cap'](this['token']), this[_0x1959b5(0x17e)] = setInterval(() => {
                var _0x5058a6 = _0x1959b5,
                    _0x376158 = this[_0x5058a6(0x26f)](0x5);
                _0x376158['setUint8'](0x0, 0x5a), _0x376158[_0x5058a6(0x243)](0x1, 0x75bcd15, !![]), this[_0x5058a6(0x20a)](_0x376158);
            }, 0x3e8), setTimeout(async () => {
                var _0x1497ba = _0x1959b5;
                
                // Bu botun kac kere spec cagiracagini belirle (botNo + 1 kadar)
                let kacKere = this['botNo'] + 1;
                console.log('Bot #' + this['botNo'] + ' basliyor, ' + kacKere + ' oyuncu izlenecek');
                
                for (let _0x37acf5 = 0x0; _0x37acf5 < kacKere; _0x37acf5++) {
                    console.log('Bot #' + this['botNo'] + ' oyuncu #' + (_0x37acf5 + 1) + ' izleniyor');
                    this[_0x1497ba(0x1a7)]();
                    await this['sleep'](0x64);
                };
                console.log('Bot #' + this['botNo'] + ' tamamlandi');
            }, 0x7d0);
        } ['onClose'](_0x4cca7d) {
            var _0x3f3e30 = _0x327871;
            this['ws']['close'](), clearInterval(this[_0x3f3e30(0x17e)]), clearTimeout(this[_0x3f3e30(0x320)]), console.log('Bot #' + this['botNo'] + ' kapandi');
        } [_0x327871(0x2bb)]() {} [_0x327871(0x1b0)](_0x56c8f1) {
            var _0xcbdb77 = _0x327871;
            let _0x2c705b = this['Buffer'](0x1);
            _0x2c705b[_0xcbdb77(0x25c)](0x0, _0x56c8f1), this[_0xcbdb77(0x20a)](_0x2c705b);
        }
        get[_0x327871(0x219)]() {
            var _0x5bd090 = _0x327871;
            return this['ws'] && this['ws'][_0x5bd090(0x322)] === WebSocket['OPEN'];
        } [_0x327871(0x26f)](_0x2b3a47) {
            return new DataView(new ArrayBuffer(!_0x2b3a47 ? 0x1 : _0x2b3a47));
        } [_0x327871(0x20a)](_0x3c591f) {
            var _0x2fdf99 = _0x327871;
            this[_0x2fdf99(0x219)] && this['ws'][_0x2fdf99(0x20a)](_0x3c591f['buffer']);
        }
    }
    
    var _0x394253 = document[_0x327871(0x1ad)](_0x327871(0x1d9))['value'];
    localStorage[_0x327871(0x24b)]('gameMode', _0x394253);
    
    // Bot baslatma fonksiyonu
    function launchBots(botSayisi) {
        console.log('=== ' + botSayisi + ' BOT BASLATILIYOR ===');
        
        for (let _0xed40a7 = 0x0; _0xed40a7 < botSayisi; _0xed40a7++) {
            setTimeout(() => {
                var _0x1321b6 = _0x327871;
                grecaptcha[_0x1321b6(0x196)](function () {
                    var _0x224c69 = _0x1321b6;
                    grecaptcha[_0x224c69(0x172)](_0x224c69(0x310), {
                        'action': _0x224c69(0x321)
                    })[_0x224c69(0x277)](function (_0x48abc0) {
                        var _0x3c130d = _0x224c69;
                        window[_0x3c130d(0x225)][_0x3c130d(0x282)](new _0x22f999(_0x3c130d(0x2c8) + _0x394253, _0x48abc0));
                    });
                });
            }, 0x1f4 * _0xed40a7);
        }
    }
    
    // Ilk 4 botu baslat
    launchBots(4);
    
}, document[_0x53a645(0x30e)]('keydown', function (_0x509101) {
    var _0x569dfa = _0x53a645;
    
    // " tusu
    if (_0x509101['key'] === '\"') {
        if (window[_0x569dfa(0x1f7)] === !![]) return;
        console.log('" tusu: Ilk 4 bot basliyor');
        window['start']();
    }
    
    // ç tusu - ekstra botlar
    if (_0x509101['key'] === 'ç' || _0x509101['key'] === 'Ç') {
        console.log('ç tusu: 4 yeni bot ekleniyor');
        
        if (window['started'] === false) {
            window['start']();
        } else {
            var _0x327871 = _0x569dfa;
            var _0x394253 = document[_0x327871(0x1ad)](_0x327871(0x1d9))['value'];
            
            // 4 yeni bot baslat
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    var _0x1321b6 = _0x327871;
                    grecaptcha[_0x1321b6(0x196)](function () {
                        var _0x224c69 = _0x1321b6;
                        grecaptcha[_0x224c69(0x172)](_0x224c69(0x310), {
                            'action': _0x224c69(0x321)
                        })[_0x224c69(0x277)](function (_0x48abc0) {
                            var _0x3c130d = _0x224c69;
                            window[_0x3c130d(0x225)][_0x3c130d(0x282)](new _0x22f999(_0x3c130d(0x2c8) + _0x394253, _0x48abc0));
                        });
                    });
                }, i * 500);
            }
        }
    }
    
    if (_0x509101['key'] === 'b') {
        document.querySelector("#main-login-section").style.display = "none";
        window.xa();
    }
    
    if (_0x509101['key'] === 'Escape') {
        document.querySelector("#main-login-section").style.display = "";
    }
}));
