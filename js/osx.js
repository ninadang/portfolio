/*
 * SimpleModal OSX Style Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery(function ($) {
	var OSX = {
		container: null,
		init: function () {
			$('.icon').click(function (e) {
				e.preventDefault();	
				var projContent = '#' + this.id + '-modal-content';
				var projData = '#' + this.id + '-modal-data';
				var projTitle = '#' + this.id + '-modal-title';
				//$('#osx-modal-data').append($('#' + proj + 'text')).html();
				$(projContent).modal({
					overlayId: 'osx-overlay',
					containerId: 'osx-container',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: OSX.open,
					onClose: OSX.close
				});
			});
		},
		open: function (d) {
			var self = this;
			self.container = d.container[0];
			d.overlay.fadeIn('slow', function () {
				$(projContent, self.container).show();
				var title = $(projTitle, self.container);
				title.show();
				d.container.slideDown('slow', function () {
					setTimeout(function () {
						var h = $(projData, self.container).height()
							+ title.height()
							+ 20; // padding
						d.container.animate(
							{height: h}, 
							200,
							function () {
								$("div.close", self.container).show();
								$(projData, self.container).show();
							}
						);
					}, 300);
				});
			})
		},
		close: function (d) {
			var self = this; // this = SimpleModal object
			d.container.animate(
				{top:"-" + (d.container.height() + 20)},
				500,
				function () {
					self.close(); // or $.modal.close();
				}
			);
		}
	};

	OSX.init();

});