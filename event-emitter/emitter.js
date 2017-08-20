function Emitter() {
	this.events = {};
}

Emitter.prototype.on = function(type, listener) {
	
	// if an event array with this type exist, select it
	// if isn't create a new array
	// 
	// eğer bu tipte bi event arrayi varsa, seç
	// yoksa yeni bi array yarat
	this.events[type] = this.events[type] || [];

	// push it to the array
	// sonrada arraye pushla
	this.events[type].push(listener);

}

Emitter.prototype.emit = function(type) {
	// bu tipte bi event varsa
	if(this.events[type]) {
		// loopa al
		this.events[type].forEach(function(listener){
			// invoke (çalıştır) et
			listener();
		})
	}

}

module.exports = Emitter;