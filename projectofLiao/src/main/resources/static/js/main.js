/*! 2017 Baidu Inc. All Rights Reserved */
!function () {
    var t, i = {
            showList: {
                phone1: [
                    {
                        type: 'txt',
                        text: '\u5EA6\u79D8\u662F\u4F60\u7684\u5C0F\u79D8\u4E66\uFF0C\u53EF\u4EE5\u4E3A\u4F60\u63D0\u4F9B\u5F88\u591A\u670D\u52A1\uFF0C\u6BD4\u5982\u627E\u7F8E\u98DF\u3001\u641C\u7535\u5F71\u3001\u8BF4\u7B11\u8BDD\u3001\u67E5\u5929\u6C14\u7B49\u3002\u6211\u8FD8\u5728\u4E0D\u65AD\u5B66\u4E60\u4E2D\uFF0C\u4F1A\u4E0D\u65F6\u7ED9\u4F60\u5E26\u6765\u60CA\u559C\u54E6',
                        timer: 1000
                    },
                    {
                        type: 'click',
                        top: 475,
                        left: 133,
                        timer: 2000
                    },
                    {
                        type: 'foot',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/food4_c420dfce.png',
                        isvoice: !0
                    },
                    {
                        type: 'hideFoot',
                        timer: 2000
                    },
                    {
                        type: 'user',
                        text: '\u6C42\u63A8\u8350\u73AF\u5883\u597D\u7684\u9002\u5408\u7EA6\u4F1A\u7684\u9910\u5385'
                    },
                    {
                        type: 'txt',
                        text: '\u5EA6\u79D8\u7ED9\u4F60\u63A8\u8350\u4E00\u5BB6\u7B26\u5408\u73AF\u5883\u597D\u7684\u9002\u5408\u7EA6\u4F1A\u7684\u6761\u4EF6\u7684\u9910\u9986\uFF0C\u975E\u5E38\u4E0D\u9519\uFF0C\u53BB\u8BD5\u8BD5\u770B\u5427',
                        timer: 2000
                    },
                    {
                        type: 'img',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/food1_2768cfe7.png',
                        timer: 1000
                    },
                    {
                        type: 'foot',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/food2_2bbe1945.jpg',
                        timer: 2000
                    },
                    {
                        type: 'click',
                        top: 260,
                        left: 125,
                        timer: 2000
                    },
                    {
                        type: 'bigImg',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/food3_0eb56ff7.png',
                        top: 10,
                        left: 246
                    },
                    {
                        type: 'click',
                        top: 77,
                        left: 30,
                        timer: 2000
                    },
                    { type: 'hideBigImg' },
                    {
                        type: 'click',
                        top: 368,
                        left: 128,
                        timer: 2000
                    },
                    { type: 'hideFoot' },
                    {
                        type: 'user',
                        text: '\u5F88\u68D2\uFF01\u5C31\u8FD9\u5BB6\u4E86'
                    },
                    {
                        type: 'txt',
                        text: '\u8FD9\u5BB6\u5E97\u5F88\u4E0D\u9519\u5427\uFF0C\u53EF\u4EE5\u70B9\u51FB\u5361\u7247\u627E\u5230\u53F3\u4E0A\u89D2\u7684\u5206\u4EAB\uFF0C\u628A\u5B83\u63A8\u8350\u7ED9\u670B\u53CB\u4EEC\u5427\uFF01',
                        timer: 2000
                    }
                ],
                phone2: [
                    {
                        type: 'txt',
                        text: '\u5EA6\u79D8\u662F\u4E2A\u8D85\u7EA7\u5F71\u8FF7\uFF0C\u6536\u85CF\u4E86\u6D77\u91CF\u7535\u5F71\uFF0C\u6C38\u8FDC\u80FD\u7ED9\u4F60\u63A8\u8350\u6700\u597D\u7684~',
                        timer: 1000
                    },
                    {
                        type: 'click',
                        top: 475,
                        left: 133,
                        timer: 2000
                    },
                    {
                        type: 'foot',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/movie3_f08c3233.png',
                        isvoice: !0
                    },
                    {
                        type: 'hideFoot',
                        timer: 2000
                    },
                    {
                        type: 'user',
                        text: '\u4E0B\u5348\u60F3\u770B\u4E2A\u7535\u5F71'
                    },
                    {
                        type: 'txt',
                        text: '\u95EE\u5EA6\u79D8\u5C31\u5BF9\u5566\uFF01\u8FD9\u53EF\u96BE\u4E0D\u5012\u6211\uFF0C\u4F46\u4F60\u8981\u5148\u544A\u8BC9\u6211\u4F60\u60F3\u770B\u4EC0\u4E48\u7535\u5F71\u5440',
                        timer: 2000
                    },
                    {
                        type: 'foot',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/movie1_91beb058.jpg',
                        timer: 1000
                    },
                    {
                        type: 'click',
                        top: 368,
                        left: 128,
                        timer: 2000
                    },
                    { type: 'hideFoot' },
                    {
                        type: 'user',
                        text: '\u5E2E\u6211\u627E\u627E\u6700\u8FD1\u70ED\u6620\u7535\u5F71'
                    },
                    {
                        type: 'txt',
                        text: '\u6700\u8FD1\u70ED\u6620\u7684\u7535\u5F71\u90FD\u5F88\u68D2\u54E6\uFF01\u6211\u4EEC\u8981\u4E0D\u8981\u4E00\u8D77\u770B\u770B\u8FD9\u4E00\u90E8\uFF1F',
                        timer: 2000
                    },
                    {
                        type: 'img',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/movie2_f191149b.png',
                        timer: 1000
                    },
                    {
                        type: 'txt',
                        text: '\u610F\u5916\u7684\u597D\u770B\uFF01\u5236\u4F5C\u7CBE\u826F\uFF0C\u773C\u524D\u4E00\u4EAE\u7684\u611F\u89C9',
                        timer: 1000
                    }
                ],
                phone3: [
                    {
                        type: 'txt',
                        text: '\u5EA6\u79D8\u662F\u4F60\u7684\u4E13\u5C5E\u5C0F\u79D8\u4E66\uFF0C\u751F\u6D3B\u91CC\u6709\u9700\u8981\u7684\uFF0C\u968F\u65F6\u90FD\u53EF\u4EE5\u627E\u5EA6\u79D8\u5E2E\u5FD9~',
                        timer: 1000
                    },
                    {
                        type: 'click',
                        top: 475,
                        left: 133,
                        timer: 2000
                    },
                    {
                        type: 'foot',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/life3_b41fc79b.png',
                        isvoice: !0
                    },
                    {
                        type: 'hideFoot',
                        timer: 2000
                    },
                    {
                        type: 'user',
                        text: '\u665A\u4E0A\u4E0D\u60F3\u6253\u626B\uFF0C\u5E2E\u6211\u627E\u4E2A\u4FDD\u6D01\u963F\u59E8\u5427'
                    },
                    {
                        type: 'txt',
                        text: '\u5BB6\u624D\u662F\u4E16\u754C\u4E0A\u6700\u6E29\u99A8\u7684\u5730\u65B9\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5EA6\u79D8\u4E3A\u4F60\u627E\u5230\u80FD\u591F\u8BA9\u5BB6\u66F4\u6E29\u99A8\u7684\u670D\u52A1\u54E6',
                        timer: 2000
                    },
                    {
                        type: 'img',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/life1_7a98a97e.png',
                        timer: 1000
                    },
                    {
                        type: 'img',
                        img: 'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/life2_e8e78706.png',
                        timer: 1000
                    }
                ]
            },
            template: '<div class="dialog-content">            <div class="dialog-flow"></div>         <div class="dialog-footer">             <div class="dialog-input"></div>                <div class="dialog-foot"></div>         </div>      </div>',
            start: function (t) {
                this.stop(), this.$container = $('.page' + t + ' .phone'), this.curList = this.showList['phone' + t], this.$container.html('<div class="dialog-img-wrapper"></div>'), this.$hint = null;
                var i = this.$content = $(this.template).appendTo(this.$container);
                this.$flow = i.find('.dialog-flow'), this.$foot = i.find('.dialog-foot'), this.$input = i.find('.dialog-input'), this.$imgWrapper = this.$container.find('.dialog-img-wrapper'), this.render();
                var e = this;
                this.renderTimer = setInterval(function () {
                    e.$content[0].scrollTop = 10000;
                }, 20);
            },
            render: function () {
                var i = this.curList, e = this, o = function (n) {
                        var a = i[n];
                        if (n == i.length && (t = setTimeout(function () {
                                $('.nextpage').click();
                            }, 10000)), a) {
                            var s = function () {
                                    e.$content[0].scrollTop = 10000, o(++n);
                                }, c = function () {
                                    return ('txt' == a.type || 'user' == a.type) && e.addText(a.text, a.type), 'img' == a.type ? void e.addImg(a.img, s) : ('hideBigImg' == a.type && e.hideBigImg(), 'foot' == a.type ? void e.addFoot(a.img, s, a.isvoice) : 'click' == a.type ? void e.addClick(a.top, a.left, s) : 'hideFoot' == a.type ? void e.hideFoot(s) : 'bigImg' == a.type ? void e.addBigImg(a.img, a.left, a.top, s) : void s());
                                };
                            a.timer ? e.aniTimer = setTimeout(function () {
                                c();
                            }, a.timer) : c();
                        }
                    };
                o(0);
            },
            addText: function (t, i) {
                this.$flow.append('<div class="dialog-item ' + ('user' == i ? 'dialog-right' : 'dialog-text') + '"><div class="dialog-duicon"></div><div class="dialog-bg">' + t + '</div></div>');
            },
            addImg: function (t, i) {
                var e = this, o = new Image();
                o.onload = function () {
                    e.$flow.append('<div class="dialog-img dialog-item"><div class="dialog-duicon"></div><img src="' + t + '" height="' + o.height + '"></div>'), i && i();
                }, o.src = t;
            },
            addFoot: function (t, i, e) {
                var o = new Image(), n = this;
                o.onload = function () {
                    var t = o.height;
                    n.$foot.animate({ height: t }), n.$flow.animate({ minHeight: 351 - t }), i && i();
                }, this.$foot.html('').append(o), o.src = t, e && this.$input.addClass('isvoice');
            },
            addBigImg: function (t, i, e, o) {
                var n = new Image(), a = $(n);
                a.css({
                    left: i,
                    top: e
                }), n.onload = function () {
                    a.animate({ left: 0 }), o && o();
                }, this.$imgWrapper.append(n), n.src = t;
            },
            hideBigImg: function (t) {
                var i = this;
                this.$imgWrapper.find('img').animate({ left: 246 }, function () {
                    i.$imgWrapper.html(''), t && t();
                });
            },
            addClick: function (t, i, e) {
                var o = $('<img src="http://s1.bdstatic.com/r/www/xiaodu/dumi/img/click_5f7ee8f1.png">').css({
                    position: 'absolute',
                    zIndex: 120,
                    top: t,
                    left: i
                }).appendTo(this.$container);
                this.clickTimer = setTimeout(function () {
                    o.remove(), e && e();
                }, 500);
            },
            hideFoot: function (t) {
                var i = this;
                this.$flow.animate({ minHeight: 351 }), this.$foot.animate({ height: 0 }, function () {
                    i.$foot.html(''), i.$input.removeClass('isvoice');
                }), t && t();
            },
            stop: function () {
                this.$container && this.$container.html(''), clearTimeout(this.clickTimer), clearInterval(this.renderTimer), clearTimeout(this.aniTimer), this.curList = [];
            }
        }, e = {
            current: 0,
            click: {
                1: {
                    left: 38,
                    top: 35
                },
                2: {
                    left: 185,
                    top: 93
                },
                3: {
                    left: 10,
                    top: 405
                }
            },
            init: function () {
                this.$container = $('.page4 .slider-wrapper');
            },
            start: function () {
                var t = this;
                0 == t.current && t.slide(1);
                var i = 0;
                this.timer = setInterval(function () {
                    var e = 0 == t.current || 4 == t.current ? 1 : t.current + 1;
                    if (4 == t.current) {
                        if (0 === i)
                            return void (i = 1);
                        i = 0;
                    }
                    var o;
                    (o = t.click[t.current]) ? t.addClick(o.top, o.left, function () {
                        t.slide(e);
                    }) : t.slide(e);
                }, 3000);
            },
            stop: function () {
                clearTimeout(this.timer);
            },
            addClick: function (t, i, e) {
                var o = $('<img src="http://s1.bdstatic.com/r/www/xiaodu/dumi/img/click_5f7ee8f1.png">').css({
                    position: 'absolute',
                    zIndex: 120,
                    top: t,
                    left: i
                }).appendTo(this.$container);
                this.clickTimer = setTimeout(function () {
                    o.remove(), e && e();
                }, 500);
            },
            slide: function (t) {
                var i = $('<div class="intro' + t + ' intro" style="left: 247px;"></div>').appendTo(this.$container);
                if (0 === this.current)
                    return this.current = t, void (this.$oldEle = i);
                this.current = t;
                var e = this.$oldEle;
                this.$oldEle.animate({ left: -247 }, function () {
                    e.remove();
                }), i.animate({ left: 0 }), this.$oldEle = i;
            }
        }, o = function (t, i, e, o) {
            var n, a, s, c = +new Date(), d = 0, r = 0, m = null, p = function () {
                    r = c, t.apply(a, s);
                };
            return function () {
                c = +new Date(), a = this, s = arguments, n = c - (o ? d : r) - i, clearTimeout(m), o ? e ? m = setTimeout(p, i) : n >= 0 && p() : n >= 0 ? p() : e && (m = setTimeout(p, -n)), d = c;
            };
        }, n = $('html'), a = navigator.userAgent.match(/MSIE (\d)/i), s = a && a[1] && a[1] <= 9, c = {
            pageNum: 0,
            width: 0,
            height: 0,
            init: function () {
                this.bindEvent();
                for (var t = 0; 5 > t; t++)
                    this['$page' + (t + 1)] = $('.page' + (t + 1));
                this.reset(), this.go(1);
                var i = this;
                window.go = function (t) {
                    i.go(t);
                };
            },
            reset: function () {
                var t = $(window);
                this.width = t.width(), this.height = t.height();
            },
            bindEvent: function () {
                var t = this, i = $(window);
                $('.nextpage').click(function () {
                    t.go(t.pageNum + 1);
                }), $('.timeline a').click(function () {
                    var i = $(this), e = i.index();
                    0 != e && t.go(e);
                }), i.on('resize', function () {
                    t.reset();
                });
                var e = o(function (i) {
                    var e = i.wheelDelta || -i.detail;
                    t.go(t.pageNum + (0 > e ? 1 : -1));
                }, 300, !1, !0);
                return 'onmousewheel' in window ? void (window.onmousewheel = e) : void (window.addEventListener ? document.addEventListener('DOMMouseScroll', e, !1) : document.attachEvent('onmousewheel', e));
            },
            contentAni: function (t, i) {
                navigator.userAgent.match(/MSIE (\d)/i);
                return s ? ($(document.body).find('.title, .text-content, .download-wrapper, .time, .download').addClass('transition-class'), $(document.body).find('.phone').css({
                    left: 130,
                    opacity: 1
                }), void (this.contentAni = function () {
                })) : void t.find('.title, .text-content, .download-wrapper, .time, .download').toggleClass('transition-class', i);
            },
            go: function (o) {
                var a, c, d, r = this;
                if (!(this.pageNum == o || o > 4 || 1 > o || this.onmoving)) {
                    if (clearTimeout(t), i.stop(), e.stop(), $('.nextpage').toggle(4 != o), n[0].className = 'onpage' + o, !this.pageNum)
                        return this.$page1.show(), this.$page1.find('.phone').css({
                            left: 130,
                            opacity: 1
                        }), this.contentAni(this.$page1, 0), this.pageNum = 1, void (1 == o && i.start(1));
                    this.onmoving = !0, a = this['$page' + this.pageNum], c = this['$page' + o], this.pageNum > o && (d = !0), this.pageNum = o, a.find('.phone').css({
                        left: s ? 130 : 100,
                        opacity: s ? 1 : 0
                    }), this.contentAni(a, 1), setTimeout(function () {
                        a.animate({ top: d ? r.height : -r.height }, 300, 'swing', function () {
                            a.hide(), r.onmoving = !1, 3 >= o && i.start(o), 4 == o && e.start(), c.find('.phone').css({
                                left: 130,
                                opacity: 1
                            }), r.contentAni(c, 0);
                        }), c.css('top', d ? -r.height : r.height).show().animate({ top: 0 }, 300, 'swing');
                    }, 200);
                }
            }
        };
    c.init(), $('.android-button').click(function () {
        _hmt.push([
            '_trackEvent',
            'click',
            'button',
            'android-download'
        ]);
    }), $('.iphone-button').click(function () {
        _hmt.push([
            '_trackEvent',
            'click',
            'button',
            'iphone-download'
        ]);
    });
    var d = [
            'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/page2_fd89256e.jpg',
            'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/page3_4eeedb55.jpg',
            'http://s1.bdstatic.com/r/www/xiaodu/dumi/img/page4_abfd39cc.jpg'
        ], r = function () {
            var t = 0, i = new Image();
            i.onload = function () {
                d[++t] && (i.src = d[t]);
            }, i.src = d[0];
        };
    $(window).on('load', function () {
        r();
    });
}();