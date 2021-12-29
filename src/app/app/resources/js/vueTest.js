window.Vue = require('vue');

import { KJUR } from 'jsrsasign';

const app = new Vue({
    el: '#sum',
    data() {
        return {
            sumNumber: 0,
        }
    },
    mounted() {
        this.generateToken();
    },
    methods: {
        sum: function (a, b) {
            console.log('sum');
            this.sumNumber = a + b;

            return a + b;
        },
        encode: function () {
            console.log('encode');
        },
        decode: function () {
            console.log('decode');
        },
        generateToken: function () {
            console.log('generateToken');
            // JWTトークンの生成

            // JWT用のシークレットトークンをセット(【注意】実際にはコードの中に書いてはいけない！)
            const secretToken = "oreore";

            // JWTのヘッダー部を定義
            const oHeader = {
                alg: 'HS256', 
                typ: 'JWT'
            };

            // JWTペイロードを作成
            let offset = Math.floor(Math.random() * Math.floor(15));
            console.log(offset);
            let DO = new Date();
            DO.setSeconds(DO.getSeconds() + offset);
            let dY = DO.getFullYear();
            let dm = DO.getMonth() + 1;
            let dd = DO.getDate();
            let dH = ('0'+DO.getHours()).slice(-2);
            let dM = ('0'+DO.getMinutes()).slice(-2);
            let dS = ('0'+DO.getSeconds()).slice(-2);
            let dStr = dY + '/' + dm + '/' + dd + ' ' + dH + ':' + dM + ':' + dS + ' +0900';
            let oPayload = {username: 'aseki', until: dStr};
            console.log(oHeader, oPayload);

            let sJWT = KJUR.jws.JWS.sign('HS256', JSON.stringify(oHeader), JSON.stringify(oPayload), secretToken)
            console.log(sJWT)
        },
    }
});