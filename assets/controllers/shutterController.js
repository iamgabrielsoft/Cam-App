
const SPEED_NUM = 0.60; // slow the speed of the shutter by increasing this number
const ROTATION_DEG = 60;
const CSS_IS_ACTIVE = "is--active";


class Shutter {
	constructor() {
		this.shutterContainer = document.querySelector(".js-shutter");
		this.shutterSVG = this.shutterContainer.querySelector(".shutters_svg");
		this.shutters = this.shutterSVG.querySelectorAll("path");

		this.shutterTimeline = new TimelineMax({paused: true, force3D:true, yoyo:true, repeat: 1});
		this.stopAnimate = this.stopAnimate.bind(this);
		this.shutterTimeline.eventCallback("onComplete", this.stopAnimate);

        this.init();
	}

	init() {
		this.shutterTimeline
		.from(this.shutters[0], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"39% 87%", ease:Expo.easeIn}, 1)
		.from(this.shutters[1], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"14% 78%", ease:Expo.easeIn}, 1)
		.from(this.shutters[2], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"2% 44%", ease:Expo.easeIn}, 1)
		.from(this.shutters[3], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"21% 17%", ease:Expo.easeIn}, 1)
		.from(this.shutters[4], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"60% 15%", ease:Expo.easeIn}, 1)
		.from(this.shutters[5], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"82% 34%", ease:Expo.easeIn}, 1)
		.from(this.shutters[6], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"88% 61%", ease:Expo.easeIn}, 1)
		.from(this.shutters[7], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"72% 86%", ease:Expo.easeIn}, 1)

		.to(this.shutters[0], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[1], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[2], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[3], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[4], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[5], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[6], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[7], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
	}


	onAnimate() {
		if(!this.shutterContainer.classList.contains(CSS_IS_ACTIVE)) {
			this.shutterContainer.classList.add(CSS_IS_ACTIVE);
        }
        
		this.shutterTimeline.play();
	}

	stopAnimate() {
		if(this.shutterContainer.classList.contains(CSS_IS_ACTIVE)) {
			this.shutterContainer.classList.remove(CSS_IS_ACTIVE);
			this.shutterTimeline.pause(0, false);
		}
	}
}


class ShutterApp {
	constructor() {
		this.shutter = new Shutter();
		this.startAnimation = this.startAnimation.bind(this);
	}

	startAnimation() {
		return ConvertTheCanva(snapdb);
	}
}


// module.export = Shutter, ShutterApp, SPEED_NUM