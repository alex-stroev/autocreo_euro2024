const gsapAnimations = (data, AUTOEVENT) => {
    // Время указываем в секундах
    const ballAnimationDuration = 1.5;

    const frameFadeDuration = 0.3;
    const frameStageDuration = ballAnimationDuration * 2 + frameFadeDuration * 2;
    const animationDuration = 0.4; //0.4
    const frame2duration = ballAnimationDuration * 1.75;

    //
    const frameStatic = document.querySelectorAll(".gsap-frame--static");
    const frameApi = document.querySelectorAll(".gsap-frame--api");
    const isData = Boolean(data.CHAMP);
    const repeatCase = isData && AUTOEVENT;
    const ballsPepeat = repeatCase ? 1 : -1;

    const ballEase = "back.inOut(1.7)";

    const static100options = {
        yoyo: true,
        repeat: repeatCase ? 1 : 0,
        repeatDelay: ballAnimationDuration,
        duration: animationDuration,
    };

    // Паузим только если есть данные
    const paused = isData;
    // console.log("paused: " + paused);

    //////////////////////////////////////////////////////////////////////////////
    //   Анимации для статического кадра
    //////////////////////////////////////////////////////////////////////////////

    const tlStaticHeaderOffer100 = gsap.timeline({ paused: paused, ...static100options });
    const tlStaticAsideBallLeft = gsap.timeline({ paused: paused });
    const tlStaticAsideBallRight = gsap.timeline({ paused: paused });
    const tlStaticAsideOffers100 = gsap.timeline({ paused: paused, ...static100options });

    // tlStaticHeader.from(".header .offer-100 span", { y: "-100%", autoAlpha: 0, duration: zzz });

    tlStaticHeaderOffer100.from(".header .offer-100 span", { y: "-200%", autoAlpha: 0, duration: 0.3 });
    tlStaticHeaderOffer100.from(".header .offer-100__header", { y: "-150%", autoAlpha: 0 });
    tlStaticAsideBallLeft.from(".i-aside-left .aside__ball", { duration: ballAnimationDuration, autoAlpha: 0, x: "120%", rotate: "360deg", delay: 0, repeatDelay: 0.9, repeat: ballsPepeat, yoyo: true, ease: ballEase });
    tlStaticAsideBallRight.from(".i-aside-right .aside__ball", { duration: ballAnimationDuration, autoAlpha: 0, x: "-120%", rotate: "-360deg", delay: 0, repeatDelay: 0.9, repeat: ballsPepeat, yoyo: true, ease: ballEase });

    tlStaticAsideOffers100.from(".gsap-aside-2", { y: "-200%", autoAlpha: 0 });
    tlStaticAsideOffers100.from(".gsap-aside-1", { y: "-100%", autoAlpha: 0 });

    // Для запуска прописываем все таймлайны в массив
    const animationsStatic = [tlStaticHeaderOffer100, tlStaticAsideBallLeft, tlStaticAsideBallRight, tlStaticAsideOffers100];

    //////////////////////////////////////////////////////////////////////////////
    //   Анимации для  кадра с данными
    //////////////////////////////////////////////////////////////////////////////
    const tlAPIheaderCHAMP = gsap.timeline({ paused: paused });
    const tlAPIheaderQuotes = gsap.timeline({ paused: paused });
    const topAPIball = gsap.timeline({ paused: paused });
    const tlAPIasideQuotesLeft = gsap.timeline({ paused: paused });
    const tlAPIasideQuotesRight = gsap.timeline({ paused: paused });
    const tlAPIasideTshirtLeft = gsap.timeline({ paused: paused });
    const tlAPIasideTshirtRight = gsap.timeline({ paused: paused });

    tlAPIheaderCHAMP.from(".top-banner__champ", { y: "-100%", autoAlpha: 0, duration: 0.5, delay: frameFadeDuration });
    tlAPIheaderQuotes.from(".top-quotes__item span", { y: "-100%", autoAlpha: 0, duration: 0.5, stagger: 0.2, delay: frameFadeDuration });

    // topAPIball.from(".large-header__top img", { y: "-1500%", autoAlpha: 0, duration: 3, ease: "bounce.out"});
    topAPIball.to(".large-header__top img", { y: "-30%", duration: frameStageDuration / 5, repeat: 4, yoyo: true });

    tlAPIasideQuotesLeft.from(".i-aside-left .aside-quotes__item span", { y: "-100%", autoAlpha: 0, duration: 0.5, stagger: 0.2, delay: frameFadeDuration });
    tlAPIasideQuotesRight.from(".i-aside-right .aside-quotes__item span", { y: "-100%", autoAlpha: 0, duration: 0.5, stagger: 0.2, delay: frameFadeDuration });

    tlAPIasideTshirtLeft.from(".i-aside-left .aside__teampic img", { x: "120%", autoAlpha: 0, duration: 0.4, delay: frameFadeDuration, repeat: 1, yoyo: true, repeatDelay: frame2duration });
    tlAPIasideTshirtRight.from(".i-aside-right .aside__teampic img", { x: "-120%", autoAlpha: 0, duration: 0.4, delay: frameFadeDuration, repeat: 1, yoyo: true, repeatDelay: frame2duration });

    // Для запуска прописываем все таймлайны в массив
    const animationsAPI = [tlAPIheaderCHAMP, tlAPIheaderQuotes, tlAPIasideQuotesLeft, tlAPIasideQuotesRight, tlAPIasideTshirtLeft, tlAPIasideTshirtRight, topAPIball];

    //////////////////////////////////////////////////////////////////////////////
    // запускаем анимацию статического кадра в любом случае
    startAnimations(animationsStatic);
    //////////////////////////////////////////////////////////////////////////////
    //   Переключение кадров (запускается только при наличии DATA) и при флаге AUTOEVENT
    //////////////////////////////////////////////////////////////////////////////

    if (isData && AUTOEVENT) {
        showFrame__static(); // начальный запуск
        let i = false;

        setInterval(function () {
            // срабатывает через frameStageDuration
            // i % 2 ? showFrame__static() : showFrame__API();
            i ? showFrame__static() : showFrame__API();
            // i++;
            i = !i;
            // console.log(i);
        }, frameStageDuration * 1000);
    } else {
        // если нет даннных, просто запускаем анимацию статического кадра
        // startAnimations(animationsStatic);
    }

    ///// end if

    function showFrame__static() {
        frameApi.forEach((item) => {
            hideStage(item);
        });

        startAnimations(animationsStatic);

        frameStatic.forEach((item) => {
            showStage(item);
        });
        setTimeout(() => {
            stopAnimations(animationsAPI);
        }, frameFadeDuration * 1000);
    }

    function showFrame__API() {
        frameStatic.forEach((item) => {
            hideStage(item);
        });

        startAnimations(animationsAPI);

        frameApi.forEach((item) => {
            showStage(item);
        });

        setTimeout(() => {
            stopAnimations(animationsStatic);
        }, frameFadeDuration * 1000);
    }

    //////////////////////////////////////////////////////////////////////////////
    //   Появление/скрытие кадров - хелперы
    //////////////////////////////////////////////////////////////////////////////

    function showStage(x) {
        // x.style.position = "relative";
        x.style.display = "inherit";
        gsap.to(x, {
            duration: frameFadeDuration,
            opacity: 1,
            delay: frameFadeDuration,

            onComplete() {
                x.style.position = "relative";
            },
        });
    }

    function hideStage(x) {
        x.style.position = "absolute";
        gsap.to(x, {
            duration: frameFadeDuration,
            opacity: 0,
            onComplete() {
                x.style.display = "none";
            },
        });
    }

    //////////////////////////////////////////////////////////////////////////////
    //   Хелперы для запуска/остановки связанных анимаций
    //////////////////////////////////////////////////////////////////////////////

    function startAnimations(x) {
        x.forEach((item) => {
            // console.log(item);
            item.play();
        });
    }

    function stopAnimations(x) {
        x.forEach((item) => {
            // console.log(item);
            item.pause(0);
        });
    }

    //////////////////////////////////////////////////////////// end module
};

export { gsapAnimations };
