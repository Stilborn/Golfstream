$(function () {
	// Map
	ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [57.15442371, 65.53675090],
                zoom: 12
            });
        }
})
