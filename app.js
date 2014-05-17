var TemplateItem = '<li role="button" class="comp">\
	<div><h3>[[= data.name ]]</h3><p>[[= data.desc ]]<br/><i style="font-weight:bold">Category: [[= data.category ]]</i></p></div>\
</li>';

$(function() {
	var tmpItem = $.template(TemplateItem);

	// Execute when the "See All" list item is tapped:
	$('#showAllItems').on('click', function() {
		$('#itemDetail').empty();
		// Loop all items and render:
		items.forEach(function(item) {
			$('#itemDetail').append(tmpItem(item));
		});
		// Update the detail article title:
		$('#categoryTitle').text('All Items');
	});

	// Execute when an icon is tapped:
	$('.quicklinks').on('singletap', 'li', function(e) {
		e.preventDefault();
		var whichItem = $(this).index();

		var renderCategory = function (whichCategory) {
			// Filter the items by category:
			var whichItems = items.filter(function( item ) {
  					return item.category === whichCategory;
			});
			$('#itemDetail').empty();
			// Loop over returned category items and render:
			whichItems.forEach(function(item) {
				$('#itemDetail').append(tmpItem(item));
				$.UIGoToArticle('#detail');
			});
			// Update the detail article title:
			$('#categoryTitle').text(whichCategory + 's');
		};

		switch (whichItem) {
			case 0:
				renderCategory('Potion');
				return;
			case 1:
				renderCategory('Card');
				return;
			case 2:
				renderCategory('Usual Item');
				return;
			case 3:
				renderCategory('Rune');
				return;
			case 4:
				renderCategory('Special Item');
				return;
		}
	});
});